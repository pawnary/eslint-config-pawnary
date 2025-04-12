const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
// const globals = require('globals');

module.exports = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false
      }
    }
    // languageOptions: {
    //   globals: {
    //     // ...globals.browser,
    //     ...globals.node
    //   },
    //   parserOptions: {
    //     projectService: true
    //   }
    // }
    // parser: '@typescript-eslint/parser',
    // plugins: [
    //   '@typescript-eslint',
    //   'import-length',
    //   'import',
    //   'simple-import-sort'
    // ],
    // extends: [
    //   'eslint:recommended',
    //   'semistandard',
    //   'plugin:@typescript-eslint/recommended'
    // ],
    // rules: {
    //   'import-length/import-length': 'error',
    //   'import/newline-after-import': 'error',
    //   'import/no-anonymous-default-export': 'error',
    //   'import/no-useless-path-segments': 'error',
    //   'import/order': 'error',
    //   'react/prop-types': 'off',
    //   'simple-import-sort/imports': 'error'
    // },
    // overrides: [
    //   {
    //     files: ['**/*.ts'],
    //     parser: '@typescript-eslint/parser',
    //     rules: {
    //       'no-undef': 'off'
    //     }
    //   }
    // ]
  }
);
