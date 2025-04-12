# ESlint react typescript

ESlint react typescript based configurations

## Install

```sh
npm i -D @pawnary/eslint-config-typescript-react
```

## usage

extends this package into your
[ESLint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files),
using
[ESLint shareable configs](https://eslint.org/docs/developer-guide/shareable-configs)

Create a `eslint.config.mjs`

```javascript
import { defineConfig } from 'eslint/config';
import pawnaryConfig from '@pawnary/eslint-config-typescript-react';

export default defineConfig([
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    extends: [pawnaryConfig]
  }
]);
```
