import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsdoc from "eslint-plugin-tsdoc";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/out",
      "**/dist",
      "**/*.d.ts",
      "**/build",
      "**/*.js",
      "**/*.mjs",
      "**/*.json",
      ".vscode-test/**",
    ],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jsdoc/recommended-typescript",
    "plugin:chai-friendly/recommended",
    "plugin:chai-expect/recommended",
    // prettier needs to be the last line
    "plugin:prettier/recommended",
  ),
  // unicorn v77+ ships flat configs: spread them directly instead of using FlatCompat
  unicorn.configs.recommended,
  {
    // scope the TS parser and typed linting to TS files only, so other file
    // types (e.g. *.json) never hit the parser error for files that are not
    // included in any `tsconfig.json` project
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "@typescript-eslint": typescriptEslint,
      "@stylistic": stylistic,
      tsdoc,
      unicorn,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        // typed linting via the TS project service (recommended over the
        // legacy `project` option): each file's `tsconfig.json` is
        // auto-detected, with better caching and project-reference support
        projectService: true,
      },
    },

    settings: {
      jsdoc: {
        mode: "typescript",
      },
    },

    rules: {
      // disable original rule in order to have chai-friendly/no-unused-expressions to check it.
      // this will also check to normal findings found by this disabled rule
      "@typescript-eslint/no-unused-expressions": "off",

      "prettier/prettier": "warn",

      // conflicting with prettier formatting (prettier is the last word here)
      "unicorn/empty-brace-spaces": "off",

      // our documentation style keeps the asterisk prefix
      "unicorn/no-asterisk-prefix-in-documentation-comments": "off",

      "unicorn/consistent-boolean-name": "off",
      "unicorn/explicit-length-check": "off",
      // `null` is fine as long as the type checks (validate) pass
      "unicorn/no-null": "off",
      // only `get`/`set`/`is` prefixes must denote functions
      "unicorn/no-non-function-verb-prefix": [
        "error",
        {
          verbs: ["get", "set", "is"],
        },
      ],
      // false positive for the required Immer idiom `[immerable] = true`
      // (and for `keyof` access on such classes): the rule's unique-symbol
      // detection checks TypeFlags.UniqueESSymbol (16384), but TS reports
      // the type of a unique symbol expression as ESSymbolLiteral (8192),
      // so the guard never matches and the generic property heuristic fires;
      // TS itself already checks the key types
      "unicorn/no-unsafe-property-key": "off",
      "unicorn/no-useless-undefined": "off",
      "unicorn/prefer-await": "off",
      // `Iterator#toArray()` is ES2025 (iterator helpers) and not available with the
      // projects' ES2022/ES2023 target/lib (nor in all VS Code extension hosts);
      // spreading an iterator stays the portable way
      "unicorn/prefer-iterator-to-array": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-ternary": "off",
      "unicorn/prefer-default-parameters": "off",
      "unicorn/prefer-includes-over-repeated-comparisons": "off",

      // Allow one more nested call
      "unicorn/max-nested-calls": [
        "error",
        {
          max: 4,
        },
      ],

      // we allow naming variables and files `config`/`util(s)`
      "unicorn/name-replacements": [
        "error",
        {
          replacements: {
            configuration: false,
            util: false,
            utils: false,
            db: false,
            doc: false,
          },
        },
      ],

      // public methods should be written before private elements
      "unicorn/consistent-class-member-order": [
        "error",
        {
          order: [
            "static-field",
            "static-block",
            "public-field",
            "private-field",
            "constructor",
            "static-method",
            "public-method",
            "private-method",
          ],
        },
      ],

      // our file naming convention: camelCase (with acronyms) and PascalCase
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            camelCase: true,
            camelCaseWithAcronyms: true,
            pascalCase: true,
          },
          // only the filename itself is checked for case; directory names
          // within the file path are ignored (e.g. 01_webview, RMB)
          checkDirectories: false,
          // allow the fully uppercase acronym GUI in filenames
          // (e.g. LiquibaseGUITestUtils.ts) — the case variants above only
          // accept lowercase acronyms or a leading acronym, so matching
          // files are skipped instead
          ignore: [/GUI/],
        },
      ],

      "@typescript-eslint/no-deprecated": "error",

      "@typescript-eslint/no-floating-promises": "error",

      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
        },
      ],

      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],
      "@stylistic/semi": "warn",
      // Prettier always emits a trailing newline at EOF — no conflict
      "@stylistic/eol-last": "warn",
      // Prettier keeps but never adds the blank line between members
      "@stylistic/lines-between-class-members": "warn",
      // Prettier normalizes to single spaces as well
      "@stylistic/no-multi-spaces": "warn",
      // exactly what Prettier collapses multiple empty lines to
      "@stylistic/no-multiple-empty-lines": [
        "warn",
        {
          max: 1,
        },
      ],
      "@stylistic/line-comment-position": [
        "warn",
        {
          position: "above",
        },
      ],
      // blank line before a standalone block comment; JSDoc blocks are
      // attached documentation (excluded via ignorePattern) and
      // block/class/module boundaries are exempt
      "@stylistic/lines-around-comment": [
        "warn",
        {
          beforeBlockComment: true,
          allowBlockStart: true,
          allowBlockEnd: true,
          allowClassStart: false,
          allowClassEnd: false,
          allowModuleStart: true,
          allowModuleEnd: false,
          // JSDoc/TSDoc blocks are attached documentation (their token
          // value starts with "*") — exclude them from the check
          ignorePattern: "^\\*",
        },
      ],
      curly: "warn",
      eqeqeq: "warn",
      // each module may only be imported once (merge the specifiers instead)
      "no-duplicate-imports": "warn",
      // forgotten debug logging; warn/error are legitimate API error channels
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      // forgotten debugging dialogs (alert/confirm/prompt)
      "no-alert": "warn",
      // `"${x}"` in a plain string is almost always a missing template literal
      "no-template-curly-in-string": "warn",
      // `x === x` is almost always a typo for `x === y`
      "no-self-compare": "warn",
      // the executor must call resolve/reject, returning a value is a mistake
      "no-promise-executor-return": "warn",
      // a `return` in a constructor has no effect
      "no-constructor-return": "warn",
      // line continuations with `\` are error-prone; use template literals
      "no-multi-str": "warn",
      // `new String("x")` etc. instead of the primitive literal is a mistake
      "no-new-wrappers": "warn",
      // `!!x`, `+x`, `"" + x` are hard to read; use Boolean(), Number(), String()
      "no-implicit-coercion": "warn",
      // `default` must be the last case in a switch
      "default-case-last": "warn",
      // `return` makes `else` redundant and harder to read
      "no-else-return": "warn",
      // `{ x: x }` can be shortened to `{ x }`
      "object-shorthand": "warn",
      // the TS rule understands thrown class references (e.g. `new Error()`),
      // which the core rule `no-throw-literal` cannot
      "@typescript-eslint/only-throw-error": "warn",
      "tsdoc/syntax": "warn",

      "jsdoc/tag-lines": [
        "warn",
        "never",
        {
          startLines: 1,
        },
      ],

      "jsdoc/no-blank-block-descriptions": "warn",

      "jsdoc/check-tag-names": [
        "warn",
        {
          definedTags: ["remarks", "typeParam"],
        },
      ],

      "jsdoc/require-param": [
        "warn",
        {
          checkDestructured: false,
        },
      ],

      "jsdoc/check-param-names": [
        "warn",
        {
          checkDestructured: false,
        },
      ],

      "jsdoc/check-indentation": "warn",
      "jsdoc/check-line-alignment": "warn",
      // each line of a multiline JSDoc block must start with an asterisk
      // (fixes the un-asterisked output of unicorn/single-line-block-comment-style)
      "jsdoc/require-asterisk-prefix": "warn",

      // we document with TSDoc: a `@throws {Type}` brace type is JSDoc syntax
      // that tsdoc/syntax rejects (malformed inline tag) and that renders
      // poorly in the IDE hover. Throws are documented as `Type` (code span)
      // or {@link Type} instead — the type requirement is therefore off
      "jsdoc/require-throws-type": "off",

      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ClassExpression: true,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
          // the rule's fixer inserts *empty* JSDoc blocks, which is not the
          // goal (documentation should be written by hand); keep reporting,
          // but never auto-fix
          enableFixer: false,
          contexts: [
            "TSInterfaceDeclaration",
            "TSMethodSignature",
            // only outside function parameters: one-off inline parameter shapes
            // stay out of scope, interfaces and named types still require docs.
            // .params/.parameters are field selectors that match the parameter
            // nodes themselves (elements of a function's params/parameters
            // array) — @typescript-eslint 8.x has no TSParameter node type
            // (parameters are plain Identifiers with a typeAnnotation)
            "TSPropertySignature:not(.params TSPropertySignature, .parameters TSPropertySignature)",
            "TSEnumMember",
            // class attributes / fields
            // (PropertyDefinition: current ESTree-aligned name, TSPropertyDefinition:
            // older @typescript-eslint versions; the unused one simply never fires)
            "PropertyDefinition",
            "TSPropertyDefinition",
            "TSAbstractPropertyDefinition",
            // WebdriverIO/Mocha test elements: a TSDoc block is expected
            // above every suite/test/setup/teardown call (only bare global
            // calls match — member expressions like regex.test(…) are safe)
            "CallExpression[callee.name='suite']",
            "CallExpression[callee.name='suiteSetup']",
            "CallExpression[callee.name='suiteTeardown']",
            "CallExpression[callee.name='test']",
            "CallExpression[callee.name='setup']",
            "CallExpression[callee.name='teardown']",
          ],
        },
      ],
    },
  },
  {
    // Config files (vite.config.ts, webpack.config.ts, …) and everything under a
    // test/ directory (incl. test utilities like chai setup files) are entry
    // points run by the tooling, not libraries imported by production code.
    // Top-level side effects (defineConfig({…}), chai.use(…), before(…)) and
    // Mocha's test-context `this` (this.timeout(), this.test) are expected
    // there; unicorn has no options to exempt those contexts.
    files: [
      "**/*.config.*",
      "**/test/**",
      "**/e2e/**",
      "**/*.test.ts",
      "**/*.spec.ts",
    ],
    rules: {
      "unicorn/no-top-level-side-effects": "off",
      "unicorn/no-this-outside-of-class": "off",
    },
  },
  {
    // The extension entry point keeps module-level state that is assigned
    // during activate() and re-assigned by the exported test setters; the
    // rule has no options to exempt this intended pattern
    files: ["**/extension.ts"],
    rules: {
      "unicorn/no-top-level-assignment-in-function": "off",
    },
  },
];
