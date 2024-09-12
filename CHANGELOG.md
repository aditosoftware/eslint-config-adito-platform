# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## Unreleased

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
