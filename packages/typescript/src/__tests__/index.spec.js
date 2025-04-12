const path = require('node:path');
const { ESLint } = require('eslint');

describe('typescript', () => {
  const linter = new ESLint({
    overrideConfigFile: path.resolve(__dirname, '../index.js'),
    overrideConfig: {
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/no-require-imports': 'off'
      }
    }
  });

  const repoFiles = [
    path.resolve(__dirname, '../index.js'),
    path.resolve(__dirname, './index.spec.js')
  ];

  test('expect no errors were found', async () => {
    const results = await linter.lintFiles(repoFiles);

    expect(results.length).toBeGreaterThan(1);

    for (const result of results) {
      expect(result.errorCount).toBe(0);
      expect(result.warningCount).toBe(0);
    }
  });
});
