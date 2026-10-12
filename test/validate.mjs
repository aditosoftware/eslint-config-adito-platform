/**
 * Validates that the shared ESLint configuration is usable by a consumer
 * project. The fixture in ./fixture uses the config exactly like a real
 * consumer would (see test/fixture/eslint.config.mjs).
 *
 * This script fails the pipeline if
 *  - the configuration cannot be loaded (e.g. a missing dependency or a
 *    broken plugin import),
 *  - any rule or plugin reference is invalid, or
 *  - the valid fixture file produces errors.
 */
import { ESLint } from "eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const eslint = new ESLint({
  cwd: path.join(__dirname, "fixture"),
});

let results;
try {
  results = await eslint.lintFiles(["clean.ts"]);
} catch (error) {
  console.error(`FAILED: could not lint the fixture project: ${error.message}`);
  process.exit(1);
}

const errors =
  results
    .find((result) => path.basename(result.filePath) === "clean.ts")
    ?.messages.filter((message) => message.severity === 2) ?? [];

if (errors.length > 0) {
  console.error(
    `FAILED: clean.ts produced errors: ${errors
      .map((message) => `[${message.ruleId ?? "fatal"}] ${message.message}`)
      .join("; ")}`
  );
  process.exit(1);
}

console.log("Configuration is valid: fixture linted successfully.");
