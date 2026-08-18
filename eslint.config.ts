import { defineConfig } from 'eslint/config';
import pawnary from './packages/eslint-config-typescript/src/index.ts';

export default defineConfig({
  extends: [pawnary],
});
