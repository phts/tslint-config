# @phts/tslint-config

[![npm](https://img.shields.io/npm/v/@phts/tslint-config.svg)](https://www.npmjs.com/package/@phts/tslint-config)
[![Build Status](https://travis-ci.org/phts/tslint-config.svg?branch=master)](https://travis-ci.org/phts/tslint-config)
[![Greenkeeper badge](https://badges.greenkeeper.io/phts/tslint-config.svg)](https://greenkeeper.io/)

My config for TSLint. It is based on [my ESLint config](https://github.com/phts/eslint-config)
with additional TypeScript-specific rules.

Import of ESLint config into TSLint is provided by
[tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) and
[tslint-import-eslint-config](https://github.com/teppeis/tslint-import-eslint-config).

## Install

```
$ npm i -D @phts/tslint-config
```

## Usage

`tslint.json`:

```json
{
  "extends": "@phts/tslint-config"
}
```
