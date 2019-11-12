# eslint-plugin-xmfe

xmfe rules that combine [prettier](https://prettier.io/) with `eslint`

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `eslint-plugin-xmfe`:

```bash
npm install eslint-plugin-xmfe --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-xmfe` globally.

## Usage

Add `xmfe` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

for general project:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/recommended"]
}
```

for vue project:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/vue"]
}
```

for react project:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/react"]
}
```

for node project:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/node"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "xmfe/xxx": 2
  }
}
```

## Supported Rules

custom rules:

```json
{
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 2,
        "semi": true
      }
    ],
    "no-console": "off"
  }
}
```

`recommended`: extends `eslint:recommended` and `plugin:prettier/recommended` with custom rules (above)
`vue`: extends `eslint:recommended`,`plugin:vue/essential` and `plugin:prettier/recommended` with custom rules (above)
`react`: extends: `eslint:recommended`, `react-app` and `plugin:prettier/recommended` with custom rules (above)
`node`: extends `eslint:recommended` and `plugin:prettier/recommended` with custom rules (above)
