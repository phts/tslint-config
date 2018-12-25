'use strict'

const ESLINT_CONFIG = {
  extends: '@phts',
}

const importEslintConfig = require('tslint-import-eslint-config')
const tslintConfig = importEslintConfig(ESLINT_CONFIG)

tslintConfig.defaultSeverity = 'error'
tslintConfig.extends.unshift('tslint:recommended')
Object.assign(tslintConfig.rules, {
  // fix tslint-import-eslint-config
  'array-bracket-spacing': [true, 'never'],
  'brace-style': [true, '1tbs'],
  'no-consecutive-blank-lines': [true, 2],
  'object-literal-key-quotes': [true, 'as-needed'],
  quotemark: [true, 'single', 'jsx-double', 'avoid-escape'],
  semicolon: [true, 'never'],
  'trailing-comma': [true, {
    multiline: 'always',
    singleline: 'never',
  }],
  'variable-name': [true, 'check-format', 'allow-pascal-case'],

  // fix tslint:recommended
  'arrow-parens': [true, 'ban-single-arg-parens'],
  'interface-name': false,
  'interface-over-type-literal': false,
  'member-access': [true, 'no-public'],
  'no-var-requires': false,
  'object-literal-sort-keys': false,
  'ordered-imports': false,

  // extra rules
  'no-any': true,
  'no-inferrable-types': true,
})

// Disable warning "no-unused-variable is deprecated". Since TypeScript 2.9.
delete tslintConfig.rules['no-unused-variable']

module.exports = tslintConfig
