import type { Config } from 'prettier';

const config: Config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'strict',
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/CHANGELOG*.md',
        '**/LICENSE*',
        '**/pnpm-lock.yaml',
      ],
    },
  ],
};

export default config;
