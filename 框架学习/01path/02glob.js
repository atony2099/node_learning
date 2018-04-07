const path = require('path');

const {resolve} = path;
const glob = require('glob')


// options is optional

console.log(process.env);

console.log(__dirname);
glob("./a/**/*.js", function (er, files) {
  console.log(files);
  files.forEach(require)
})
