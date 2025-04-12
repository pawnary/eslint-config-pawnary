const {
  eslint: prettierESLit
} = require('./packages/prettier-config/src/index.js');
const typescript = require('./packages/typescript/src/index.js');

/**
 * @type {import('eslint').Linter.Config[]}
 **/
module.exports = [
  ...prettierESLit,
  ...typescript,
  {
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    },
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false
      }
    }
  }
];
