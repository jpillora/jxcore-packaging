var fs = require("fs");
//remove the leading .
var dirname = __dirname.replace(/^\./,'');

var contents = fs.readFileSync('./bar.txt');
console.log('%s/bar.txt: %s', dirname, contents);
