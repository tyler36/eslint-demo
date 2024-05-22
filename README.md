# ESLint <!-- omit in toc -->

- [Overview](#overview)
- [Getting started](#getting-started)
- [Configuration](#configuration)
    - [Ignoring files](#ignoring-files)
    - [Using configuration comments](#using-configuration-comments)
- [Usage](#usage)
- [Rules](#rules)
- [Awesome ESLint](#awesome-eslint)
    - [Plugins](#plugins)
        - [@stylistic](#stylistic)
        - [ESLint-plugin-compat](#eslint-plugin-compat)
        - [ESLint-plugin-cypress](#eslint-plugin-cypress)
        - [ESLint-plugin-HTML](#eslint-plugin-html)
        - [ESLint-plugin-jest](#eslint-plugin-jest)
        - [ESLint-plugin-jsdoc](#eslint-plugin-jsdoc)
        - [ESLint-plugin-json](#eslint-plugin-json)
        - [ESLint-plugin-promise](#eslint-plugin-promise)
        - [ESLint-plugin-unicorn](#eslint-plugin-unicorn)
        - [ESLint-plugin-vue](#eslint-plugin-vue)
    - [VScode extension](#vscode-extension)

## Overview

ESLint statically analyzes your code to find problems.
Run ESLint as part of your continuous integration pipeline.

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

1. Add configuration to the `eslint.config.js` file. See Configure ESLint [documentation](https://eslint.org/docs/latest/use/configure/).

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

By default, ESLint ignores files using the following patter: `["**/node_modules/", ".git/"]`
To ignore files (added to the previous pattern):

- On the command-line, use `--ignore-pattern`
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

To include option settings:

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

## Awesome ESLint

[Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)

### Plugins

#### @stylistic

ESLint extracted formatter rules into separate packages.

Migrated plugins:

- `eslint` -> [`@stylistic/eslint-plugin-js`](https://eslint.style/packages/js)
Built-in stylistic rules for JavaScript
- `@typescript-eslint/eslint-plugin` -> [`@stylistic/eslint-plugin-ts`](https://eslint.style/packages/ts)
Stylistic rules for TypeScript
- `eslint-plugin-react` -> [`@stylistic/eslint-plugin-jsx`](https://eslint.style/packages/jsx)
Stylistic rules for framework-agnostic JSX

Plugins:

- [`@stylistic/eslint-plugin-plus`](https://eslint.style/packages/plus)
Other rules introduced by ESLint Stylistic

Unified plugins:

- [`@stylistic/eslint-plugin`](https://eslint.style/packages/default)
All rules from the above 4 plugins

#### ESLint-plugin-compat

Homepage: [`eslint-plugin-compa`t](https://github.com/amilajack/eslint-plugin-compat)
Lint the browser compatibility of your code.

#### ESLint-plugin-cypress

Homepage: [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress)
Lint the Cypress tests.

#### ESLint-plugin-HTML

Homepage: [`eslint-plugin-html`](https://github.com/BenoitZugmeyer/eslint-plugin-html)
Lint and fix inline scripts contained in HTML files.

#### ESLint-plugin-jest

Homepage: [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)

Rules and fixes for Jest tests.

#### ESLint-plugin-jsdoc

Homepage: [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)
JSDoc linting rules for ESLint.

#### ESLint-plugin-json

Homepage: [`eslint-plugin-json`](https://github.com/azeemba/eslint-plugin-json)

ESLint plugin for JSON files.

#### ESLint-plugin-promise

Homepage: [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
Enforce best practices for JavaScript promises.

#### ESLint-plugin-unicorn

Homepage: [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)

More than 100 powerful ESLint rules.

#### ESLint-plugin-vue

Homepage: [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue)

Official plugin for Vue.

### VScode extension

Homepage: <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.enable": true
}
```
