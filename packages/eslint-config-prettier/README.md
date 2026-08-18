## Installing Prettier

**PNPM**

```
pnpm add -D @pawnary/eslint-config-prettier
```

**NPM**

```
npm i -D @pawnary/eslint-config-prettier
```

This package requires:

- [Prettier 3](https://github.com/prettier/prettier),
- [ESLint 10](https://github.com/eslint/eslint/tree/main/packages/eslint-config-eslint),
- [eslint-config-prettier 10](https://github.com/prettier/eslint-config-prettier),
- [@pawnary/prettier-config](../prettier-config)

## Full installation

```
pnpm add -D eslint @eslint/js eslint-config-prettier prettier @pawnary/prettier-config @pawnary/eslint-config-prettier
```

## Usage

**With TypeScript**

Create a `eslint.config.ts` file and copy-paste:

```typescript
import { defineConfig } from 'eslint/config';
import pawnary from '@pawnary/eslint-config-prettier';

export default defineConfig({
  extends: [pawnary],
});
```

**With JavaScript (ESM)**

Create a `eslint.config.mjs` file and copy-paste:

```javascript
import { defineConfig } from 'eslint/config';
import pawnary from '@pawnary/eslint-config-prettier';

export default defineConfig({
  extends: [pawnary],
});
```

**With JavaScript (CommonJS)**

Create a `eslint.config.cjs` file and copy-paste:

```javascript
const { defineConfig } = require('eslint/config');
const pawnary = require('@pawnary/eslint-config-prettier');

module.exports = defineConfig({
  extends: [pawnary],
});
```
