const path = require('path');

const {resolve} = path;



/// 
// 1.从做到右边 合成一个 绝对路径
console.log(__dirname,"dirname ====");
console.log(resolve(__dirname,'./index.js'));
