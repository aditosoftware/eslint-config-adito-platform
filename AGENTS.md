# AGENTS.md

Project-specific instructions for coding agents working in this repository.

## Writing style

- Never use em-dashes (`—`), neither in code, documentation, changelogs, nor in responses. Use commas, colons, parentheses, or separate sentences instead.

## Rule changes

Whenever a rule is added, changed, or removed in `index.mjs` (or in the fixture/test setup in a way that affects consumers), always add an entry to `CHANGELOG.md` under the `## Unreleased` section in the same change. Use the Keep a Changelog format already used by the file (`Added` / `Changed` / `Removed`), and briefly explain the reason for the change where applicable.

## Versioning and release

- Never bump the version in `package.json` and never create a release yourself.
- After finishing a change (including its changelog entry), remind the user at the end that the version should be bumped and released.
