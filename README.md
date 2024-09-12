# eslint-config-adito-platform

This is a shared eslint config for the platform teams of ADITO. It contains rules for code quality and documentation.

## Usage

1. Install via `npm install --save-dev @aditosoftware/eslint-config-adito-platform`
2. Create a file named `eslint.config.mjs` in your project.
3. Include the configuration:

```javascript
import config from "@aditosoftware/eslint-config-adito-platform";

export default [...config];
```

In order to have the prettier rules working, you need to add the following to your `.prettierrc` file:
```json
{
  "endOfLine": "auto"
}
```

## Notes

The shared config was created in  accordance with this documentation: https://eslint.org/docs/latest/extend/shareable-configs