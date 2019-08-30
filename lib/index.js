/**
 * @fileoverview xmfe rules
 * @author cleam
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
  // rules: requireIndex(__dirname + '/rules'),
  configs: {
    recommended: {
      // 环境配置（根据实际情况做取舍）
      env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        jquery: true
      },
      globals: {
        PRODUCTION: true,
        PREPRODUCTION: true,
        DEVELOPMENT: true
      },
      // 继承eslint的默认配置和prettier的配置。
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      // 支持babel的使用
      parser: 'babel-eslint',
      parserOptions: {
        // 支持es6模块语法
        sourceType: 'module'
      },
      // 自定义规则（优先级最高）
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true
          }
        ],
        'no-console': 'off'
      }
    },
    vue: {
      env: {
        node: true,
        browser: true
      },
      extends: ['eslint:recommended', 'plugin:vue/essential', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true
          }
        ],
        'no-console': 'off'
      },
      parserOptions: {
        parser: 'babel-eslint'
      }
    },
    react: {
      extends: ['eslint:recommended', 'react-app', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true
          }
        ],
        'no-console': 'off'
      }
    }
  }
};
