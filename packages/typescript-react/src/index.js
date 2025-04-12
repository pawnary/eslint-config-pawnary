const configTypescript = require('@pawnary/eslint-config-typescript');
const tseslint = require('typescript-eslint');
const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = tseslint.config(configTypescript, {
  ...react.configs.flat.recommended,
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  ...react.configs.flat.recommended,
  languageOptions: {
    ...react.configs.flat.recommended.languageOptions,
    globals: {
      ...globals.browser
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
});
