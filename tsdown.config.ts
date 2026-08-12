import { defineConfig } from 'tsdown';

export default defineConfig({
  workspace: true,
  entry: 'src/**/*.ts',
  clean: true,
  dts: true,
  deps: {
    neverBundle: true,
  },
  format: {
    esm: {
      outDir: 'dist/esm',
    },
    cjs: {
      outDir: 'dist/cjs',
    },
  },
});
