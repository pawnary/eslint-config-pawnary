import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

// TODO: check for Linting with Type Information (https://typescript-eslint.io/getting-started/typed-linting/)

export default defineConfig({
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
  ],
  files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
  ],
});
