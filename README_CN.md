# eslint-plugin-xmfe

新萌前端代码规则（结合 `eslint` 和 [prettier](https://prettier.io/)），主要使用了 `eslint` 和 `prettier` 推荐的默认规则，加极少量的自定义规则。

## 安装

首先，安装 [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

然后，安装 `eslint-plugin-xmfe`:

```bash
npm install eslint-plugin-xmfe --save-dev
```

**注意:** 如果你全局安装了`eslint` (使用 `-g` 参数) 那么也必须全局安装 `eslint-plugin-xmfe`.

## 使用

将 `xmfe` 添加到 `.eslintrc` 配置文件.可以省略 `eslint-plugin-` 前缀:

一般项目（如`shfe-cli`脚手架项目）的使用：:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/recommended"]
}
```

`vue`项目的使用:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/vue"]
}
```

`react`项目的使用:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/react"]
}
```

`node`项目的使用:

```json
{
  "plugins": ["xmfe"],
  "extends": ["plugin:xmfe/node"]
}
```

## 支持的规则说明

自定义规则:

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

- `recommended`: 继承自 `eslint:recommended` 和 `plugin:prettier/recommended` 加上上面的自定义规则
- `vue`: 继承自 `eslint:recommended`,`plugin:vue/essential` 和 `plugin:prettier/recommended` 加上上面的自定义规则
- `react`: 继承自 `eslint:recommended`, `react-app` 和 `plugin:prettier/recommended`加上上面的自定义规则
- `node`: 继承自 `eslint:recommended` 和 `plugin:prettier/recommended`加上上面的自定义规则
