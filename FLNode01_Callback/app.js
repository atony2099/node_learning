
var fs = require("fs");


// === blocking ======
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");

// ==== noneblocking
fs.readFile('input.txt',function(err,data){
	if (err) return console.err(err);
	console.log(data.toString());

})

console.log("Program Ended")
