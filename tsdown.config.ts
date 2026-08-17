import { defineConfig } from 'tsdown';
import tsdownFixExports from '@pawnary/tsdown-fix-exports';

export default defineConfig({
  workspace: true,
  entry: 'src/**/*.ts',
  clean: true,
  dts: true,
  publint: true,
  exports: true,
  deps: {
    neverBundle: true,
  },
  format: ['cjs', 'esm'],
  plugins: [tsdownFixExports()],
});
