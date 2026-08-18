# Pawnary Prettier Config

## Installing

**PNPM**

```
pnpm add -D @pawnary/prettier-config
```

**NPM**

```
npm i -D @pawnary/prettier-config
```

This package requires [Prettier 3](https://github.com/prettier/prettier).

## Full installation

```
pnpm add -D prettier @pawnary/prettier-config
```

## Features

- HTML whitespace sensitivity is set to `strict` to ensure consistent formatting
  of HTML files,
- Use single quotes for JSX attributes to maintain a consistent style in React
  components,
- Always wrap prose to 80 characters to improve readability,
- Only add quotes around object properties where required,
- Enforce single attribute per line in HTML, Vue and JSX to improve readability,
- Single quotes instead of double quotes for strings to maintain a consistent
  style,
- Ignore common files:
  - `**/node_modules/**`
  - `**/CHANGELOG*.md`
  - `**/LICENSE*`
  - `**/pnpm-lock.yaml`

See full configuration [here](./src/index.ts).

## Usage

**With TypeScript**

Create a `prettier.config.ts` file and copy-paste:

```typescript
export { default } from '@pawnary/prettier-config';
```

**With JavaScript (ESM)**

Create a `prettier.config.mjs` file and copy-paste:

```javascript
export { default } from '@pawnary/prettier-config';
```

**With JavaScript (CommonJS)**

Create a `prettier.config.cjs` file and copy-paste:

```javascript
const prettier = require('@pawnary/prettier-config');

module.exports = prettier;
```

**With JSON**

In your `package.json` file, add the following:

```json
{
  "prettier": "@pawnary/prettier-config"
}
```
