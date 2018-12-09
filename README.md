# @phts/tslint-config

My config for TSLint. It is based on [my ESLint config](https://github.com/phts/eslint-config)
with additional TypeScript-specific rules.

Import of ESLint config into TSLint is provided by
[tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) and
[tslint-import-eslint-config](https://github.com/teppeis/tslint-import-eslint-config).

## Install

```
$ npm i -D @phts/eslint-config @teppeis/tslint-eslint-rules
```

## Usage

Create file `.tslint.js`:

```js
module.exports = require('@phts/tslint-config')
```

and run `tslint` with specifying tslint config file above:

```
tslint -c ./.tslint.js
```
