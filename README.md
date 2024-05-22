# Eslint <!-- omit in toc -->

- [Overview](#overview)
- [Getting started](#getting-started)
- [Configuration](#configuration)
    - [Ignoring files](#ignoring-files)
    - [Using configuration comments](#using-configuration-comments)
- [Usage](#usage)
- [Rules](#rules)
- [Awesome Eslint](#awesome-eslint)
    - [Plugins](#plugins)
        - [@stylistic](#stylistic)
        - [eslint-plugin-compat](#eslint-plugin-compat)
        - [eslint-plugin-cypress](#eslint-plugin-cypress)
        - [eslint-plugin-html](#eslint-plugin-html)
        - [eslint-plugin-jest](#eslint-plugin-jest)
        - [eslint-plugin-jsdoc](#eslint-plugin-jsdoc)
        - [eslint-plugin-json](#eslint-plugin-json)
        - [eslint-plugin-promise](#eslint-plugin-promise)
        - [eslint-plugin-unicorn](#eslint-plugin-unicorn)
        - [eslint-plugin-vue](#eslint-plugin-vue)
    - [VScode extension](#vscode-extension)

## Overview

"ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline."

- [Homepage](https://eslint.org/)

## Getting started

1. Install ESLint in your project

```shell
npm install --save-dev eslint @eslint/js
```

1. Add `eslint.config.js` configuration file.

```shell
# Create JavaScript configuration file
touch eslint.config.js
```

1. Add configuration to the `eslint.config.js` file.
   See Configure ESLint [documentation](https://eslint.org/docs/latest/use/configure/).

```js
// ./eslint.config.js
import js from "@eslint/js";

export default [
    js.configs.recommended,
   {
       rules: {
           "no-unused-vars": "warn",
           "no-undef": "warn"
       }
   }
];
```

## Configuration

The following are valid configuration file names:

- `eslint.config.js`
- `eslint.config.mjs`
- `eslint.config.cjs`

```js
export default [
    {
        rules: {
            eqeqeq: "off",
            "no-unused-vars": "error",
            "prefer-const": ["error", { "ignoreReadBeforeAssign": true }]
        }
    }
];
```

### Ignoring files

By default, Eslint ignores files using the following patter: `["**/node_modules/", ".git/"]`
To ignore additional files (added to the previous pattern):

- On the command line, use `--ignore-pattern`
- Inside your config files

```js
// eslint.config.js
import js from '@eslint/js';
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            // Set common globals (windows,document...) to prevent "no-undef"
            globals: {
                ...globals.browser,
            }
        },
        ignores: ['node_modules', 'vendor', '.gitlab-ci-local'],
}];

```

### Using configuration comments

Use file comments to dynamically configure rules.

```js
/* eslint eqeqeq: "off", curly: "error" */
```

You can also add options.

```js
/* eslint quotes: ["error", "double"], curly: 2 */
```

Add specific descriptions too.

```js
/* eslint eqeqeq: "off", curly: "error"
 * --------
 * This will not work due to the line above starting with a '*' character.
 */
```

## Usage

- Use the command:

```bash
npx eslint
```

- Add a script helper to `package.json`

```json
  "scripts": {
    "lint:js": "eslint",
    "lint:js:fix": "eslint --fix"
  },
```

## Rules

[Rule list](https://eslint.org/docs/latest/rules/)

Rules have 3 configurable states:

- `off` / `0` - turn the rule off.
- `warn` / `1` - turn the rule on, but do not throw errors.
- `error` / `2` - turn the rule on, and return an non-zero exit code.

[Rule list](https://eslint.org/docs/latest/rules/) groups rules as:

- [Possible problems](https://eslint.org/docs/latest/rules/#possible-problems)
- [Suggestions](https://eslint.org/docs/latest/rules/#suggestions)
- [Layout & Formatting](https://eslint.org/docs/latest/rules/#layout--formatting)

## Awesome Eslint

[Awesome Eslint](https://github.com/dustinspecker/awesome-eslint)

### Plugins

#### @stylistic

Eslint extracted formatter rules into separate packages.

Migrated plugins:

- eslint -> [@stylistic/eslint-plugin-js](https://eslint.style/packages/js)
    Built-in stylistic rules for JavaScript
- @typescript-eslint/eslint-plugin -> [@stylistic/eslint-plugin-ts](https://eslint.style/packages/ts)
    Stylistic rules for TypeScript
- eslint-plugin-react -> [@stylistic/eslint-plugin-jsx](https://eslint.style/packages/jsx)
    Stylistic rules for framework-agnostic JSX

Additional plugins:

- [@stylistic/eslint-plugin-plus](https://eslint.style/packages/plus)
    Supplementary rules introduced by ESLint Stylistic

Unified plugins:

- [@stylistic/eslint-plugin](https://eslint.style/packages/default)
    All rules from the above 4 plugins

#### eslint-plugin-compat

Homepage: [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
Lint the browser compatibility of your code.

#### eslint-plugin-cypress

Homepage: [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
Lint the Cypress tests.

#### eslint-plugin-html

Homepage: [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
Lint and fix inline scripts contained in HTML files.

#### eslint-plugin-jest

Homepage: [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

Rules and fixes for Jest tests.

#### eslint-plugin-jsdoc

Homepage: [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
JSDoc linting rules for ESLint.

#### eslint-plugin-json

Homepage: [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)

Eslint plugin for JSON files.

#### eslint-plugin-promise

Homepage: [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
Enforce best practices for JavaScript promises.

#### eslint-plugin-unicorn

Homepage: [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

More than 100 powerful ESLint rules.

#### eslint-plugin-vue

Homepage: [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

Official plugin for Vue.

### VScode extension

Homepage: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```
