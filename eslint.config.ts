import { defineConfig } from 'eslint/config';
import pawnary from './packages/typescript/src/index.ts';

export default defineConfig({
  extends: [pawnary],
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
