## Installing

**NPM**

```
npm i -D @pawnary/prettier-config
```

**PNPM**

```
pnpm add -D @pawnary/prettier-config
```

## Usage

**With TypeScript**

Create a `prettier.config.ts` file and copy-paste:

```typescript
export { prettier as default } from '@pawnary/prettier-config';
```

**With JavaScript (ESM)**

Create a `prettier.config.mjs` file and copy-paste:

```javascript
export { prettier as default } from '@pawnary/prettier-config';
```

**With JavaScript (CommonJS)**

Create a `prettier.config.cjs` file and copy-paste:

```javascript
const { prettier } = require('@pawnary/prettier-config');

module.exports = prettier;
```
