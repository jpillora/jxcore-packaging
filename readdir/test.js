var fs = require("fs");
//remove the leading .
var dirname = __dirname.replace(/^\./,'');

var files = fs.readdirSync(dirname);
console.log('%s: %s', dirname, files.join(','));
