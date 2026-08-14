## Installing

**PNPM**

```
pnpm add -D eslint @eslint/js typescript typescript-eslint jiti @pawnary/eslint-config-typescript
```

**NPM**

```
npm i -D eslint @eslint/js typescript typescript-eslint jiti @pawnary/eslint-config-typescript
```

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
