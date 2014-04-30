var fs = require("fs");
var files = fs.readdirSync(__dirname);
console.log('%j', files);
