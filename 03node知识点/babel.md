[Babel的使用
](https://segmentfault.com/a/1190000008159877)

## 是什么
将es6 和 es 7的代码转换成 es5；

## 如何使用
有什么组成
babel-core: 将es6语法转换成低版本

配置 .babelrc文件，告诉babel 应该做什么

基础配置:
通过preset plugins 告诉babel该做什么
```
{
  "presets": [],
  "plugins": []
}
```
preset:打包了一系列插件
preset[" "es2015"
"] ：打包了es6语法

## 不能使用新的api
1. babel-polyfill == 全局引入
2.  babel-runtime，babel-plugin-transform-runtime 模拟 es6的环境
