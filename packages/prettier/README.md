## Installing Prettier

**PNPM**

```
pnpm add -D prettier @pawnary/prettier-config
```

**NPM**

```
npm i -D prettier @pawnary/prettier-config
```

## Installing full ESLint Config Prettier

```
pnpm add -D eslint @eslint/js prettier @pawnary/prettier-config
```

## Usage

**With TypeScript**

Create a `prettier.config.ts` file and copy-paste:

```typescript
export { prettier as default } from '@pawnary/prettier-config';
```

Create a `eslint.config.ts` file and copy-paste:

```typescript
import { defineConfig } from 'eslint/config';
import { eslintConfigPrettier } from '@pawnary/prettier-config';

export default defineConfig({
  extends: [eslintConfigPrettier],
});
```

**With JavaScript (ESM)**

Create a `prettier.config.mjs` file and copy-paste:

```javascript
export { prettier as default } from '@pawnary/prettier-config';
```

Create a `eslint.config.mjs` file and copy-paste:

```javascript
import { defineConfig } from 'eslint/config';
import { eslintConfigPrettier } from '@pawnary/prettier-config';

export default defineConfig({
  extends: [eslintConfigPrettier],
});
```

**With JavaScript (CommonJS)**

Create a `prettier.config.cjs` file and copy-paste:

```javascript
const { prettier } = require('@pawnary/prettier-config');

module.exports = prettier;
```

Create a `eslint.config.cjs` file and copy-paste:

```javascript
const { defineConfig } = require('eslint/config');
const { eslintConfigPrettier } = require('@pawnary/prettier-config');

module.exports = defineConfig({
  extends: [eslintConfigPrettier],
});
```
