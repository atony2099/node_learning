[babel-preset-env: a preset that configures Babel for you
](http://2ality.com/2017/02/babel-preset-env.html)



#ES 各个版本
ES6  2017:构成版本号  + 年份

ES6 2015
ES7 2016
ES8 2017



# ES6配置 - 转换语法
nodel 支持部分babel语法。
需要引入 babel
{
  "presets": ["env", "stage-0", "react"], //转码的规则
  "plugins": [
    "transform-runtime",
    "transform-decorators-legacy",
    "transform-class-properties"
  ]
}


1. preset是干嘛的？

设定转码规则。
```
# 最新转码规则
$ npm install --save-dev babel-preset-latest
具体包括： es2017 es2016 es2015


babel-preset-env: 类似latest,只不过会按需转码。如果环境已经支持，不会再转码。



# react 转码规则
$ npm install --save-dev babel-preset-react
# 不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
```




# babel-polyfill &&  transform-runtime
需要使用新的api：Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，
babel-polyfill转义的时候会引入很多重复文件，transform-runtime相当于一个语法优化， 有效减少重复文件。

https://github.com/lmk123/blog/issues/45
