## Installing

**PNPM**

```
pnpm add -D @pawnary/eslint-config-typescript
```

**NPM**

```
npm i -D @pawnary/eslint-config-typescript
```

This package requires:

- [ESLint 10](https://github.com/eslint/eslint/tree/main/packages/eslint-config-eslint),
- [TypeScript 6](https://github.com/microsoft/TypeScript) and
- [typescript-eslint 8](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/typescript-eslint)

## Usage

**With TypeScript**

Create a `eslint.config.ts` file and copy-paste:

```typescript
import { defineConfig } from 'eslint/config';
import pawnary from '@pawnary/eslint-config-typescript';

export default defineConfig({
  extends: [pawnary],
});
```

## Usage with `@pawnary/eslint-config-prettier`

**With TypeScript**

Create a `eslint.config.ts` file and copy-paste:

```typescript
import { defineConfig } from 'eslint/config';
import prettier from '@pawnary/eslint-config-prettier';
import typescript from '@pawnary/eslint-config-typescript';

export default defineConfig({
  extends: [prettier, typescript],
});
```
