# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.4

### Changed

- ci: used npm 11 for publishing with OIDC and used only supported node versions for pipelines by @rH4rtinger in #34


- Upgraded dependencies:
  - chore(deps): bump flatted from 3.4.1 to 3.4.2 by @dependabot[bot] in #20
  - chore(deps): bump picomatch from 4.0.3 to 4.0.4 by @dependabot[bot] in #21
  - chore(deps): bump brace-expansion from 1.1.12 to 1.1.13 by @dependabot[bot] in #22
  - chore(deps): bump actions/setup-node from 6 to 6.3.0 by @dependabot[bot] in #23
  - chore(deps): bump actions/setup-node from 6.3.0 to 6.4.0 by @dependabot[bot] in #24
  - chore(deps): bump fast-uri from 3.1.0 to 3.1.2 by @dependabot[bot] in #25
  - chore(deps): bump brace-expansion from 5.0.5 to 5.0.6 by @dependabot[bot] in #26
  - chore(deps): bump actions/checkout from 6 to 6.0.2 by @dependabot[bot] in #27
  - chore(deps): bump actions/checkout from 6.0.2 to 6.0.3 by @dependabot[bot] in #28
  - chore(deps): bump js-yaml from 4.1.1 to 4.2.0 by @dependabot[bot] in #29
  - chore(deps): bump actions/checkout from 6.0.3 to 7.0.0 by @dependabot[bot] in #30
  - chore(deps): bump actions/setup-node from 6.4.0 to 7.0.0 by @dependabot[bot] in #31
  - chore(deps): bump brace-expansion from 1.1.14 to 1.1.16 by @dependabot[bot] in #33
  - chore(deps): bump js-yaml from 4.2.0 to 4.3.0 by @dependabot[bot] in #32
  - chore(deps): bump fast-uri from 3.1.2 to 3.1.4 by @dependabot[bot] in #35
  - chore(deps): bump actions/checkout from 7.0.0 to 7.0.1 by @dependabot[bot] in #36
  - chore(deps): bump brace-expansion and eslint by @dependabot[bot] in #37

## 2.0.3

### Added

- added npmignore to not publish the github folder

### Changed

- Upgraded dependencies:
  - @typescript-eslint/eslint-plugin to 8.57.0
  - @typescript-eslint/parser to 8.57.0
  - @stylistic/eslint-plugin to 5.10.0
  - eslint-plugin-chai-expect to 4.0.0
  - eslint-plugin-jsdoc to 62.8.0
  - eslint-plugin-prettier to 5.5.5
  - eslint-plugin-tsdoc to 0.5.2

## 2.0.2

### Changed

- Upgraded dependencies:
 - @typescript-eslint/eslint-plugin to 8.46.1
 - @typescript-eslint/parser to 8.46.1
 - @stylistic/eslint-plugin to 5.4.0
 - eslint-plugin-jsdoc to 60.8.3

## 2.0.1

### Changed

- Upgraded dependencies:
  - @typescript-eslint/eslint-plugin to 8.41.0
  - @typescript-eslint/parser to 8.41.0
  - @stylistic/eslint-plugin to 5.2.3
  - eslint to 9.34.0
  - eslint-config-prettier to 10.1.8
  - eslint-plugin-chai-friendly to 1.1.0
  - eslint-plugin-jsdoc to 54.1.1
  - eslint-plugin-prettier to 5.5.4
  - prettier to 3.6.2

## 2.0.0

### Changed

- Upgraded dependencies:
  - eslint to 9.21.0
  - @typescript-eslint/eslint-plugin to 8.26.0
  - @typescript-eslint/parser to 8.26.0
  - @stylistic/eslint-plugin to 4.2.0
  - eslint-config-prettier to 10.0.2
  - eslint-plugin-jsdoc to 50.6.3
  - eslint-plugin-prettier to 5.2.3
  - eslint-plugin-tsdoc to 0.4.0
  - prettier to 3.5.3

### Removed

- Removed dependency "eslint-plugin-deprecation": Those rules are integrated into "typescript-eslint" and therefore not needed

## 1.0.6

### Changed

- Upgraded dependencies:
  - @typescript-eslint/eslint-plugin to 8.5.0
  - @typescript-eslint/parser to 8.5.0
  - @stylistic/eslint-plugin to 2.8.0

## 1.0.5

### Changed

- Upgraded dependencies:
  - @typescript-eslint/eslint-plugin to 8.4.0
  - @typescript-eslint/parser to 8.4.0
  - @stylistic/eslint-plugin to 2.7.2
  - eslint-plugin-jsdoc to 50.2.2

## 1.0.4

### Changed

- Upgraded dependencies:
  - @typescript-eslint/eslint-plugin to 8.0.0
  - @typescript-eslint/parser to 8.0.0
  - @stylistic/eslint-plugin to 2.6.0
  - eslint-plugin-chai-friendly to 1.0.1
  - eslint-plugin-jsdoc to 48.10.2
  - eslint-plugin-tsdoc to 0.3.0

## 1.0.3

### Changed

- Reduced the level for prettier from `error` to `warn`

## 1.0.2

### Added

- Added `eslint-config-prettier` and its recommended configuration
- Added `eslint-plugin-chai-expect` and its recommended configuration
- Added `eslint-plugin-deprecation` and its recommended configuration
- Added `eslint-plugin-prettier` and its recommended configuration. **Note:**
  You need to add the following to your `.prettierrc` file in order to have you eslint rule work as intended:

  ```json
  {
    "endOfLine": "auto"
  }
  ```

## 1.0.1

### Added

- Added `eslint-plugin-chai-friendly` and its recommended configuration

## 1.0.0

### Added

- Initial release
