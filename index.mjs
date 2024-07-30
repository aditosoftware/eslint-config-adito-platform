import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsdoc from "eslint-plugin-tsdoc";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

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
    "plugin:deprecation/recommended",
    // prettier needs to be the last line
    "plugin:prettier/recommended"
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      tsdoc,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 6,
      sourceType: "module",

      parserOptions: {
        project: true,
      },
    },

    settings: {
      jsdoc: {
        mode: "typescript",
      },
    },

    rules: {
      "prettier/prettier": "warn",

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

      "@typescript-eslint/semi": "warn",
      curly: "warn",
      eqeqeq: "warn",
      "no-throw-literal": "warn",
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
        },
      ],
    },
  },
];
