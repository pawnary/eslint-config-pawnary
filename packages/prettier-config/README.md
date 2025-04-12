## Installing

```
npm i -D @pawnary/prettier-config
```

Then, create a `.prettierrc.mjs` file and copy-paste:

```javascript
export { prettier as default } from '@pawnary/prettier-config';
```

If you are using CommonJS, create a `.prettierrc.js` file and copy-paste:

```javascript
const { prettier } = require('@pawnary/prettier-config');

module.exports prettier;
```
