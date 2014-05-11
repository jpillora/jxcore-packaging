var fs = require("fs");
var path = require("path");
var files = fs.readdirSync(path.join(__dirname, 'sub'));
console.log('%j', files);
