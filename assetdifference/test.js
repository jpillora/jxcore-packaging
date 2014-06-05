var fs = require("fs");

var buff = fs.readFileSync("./example.file");

console.log('bytes #%s', buff.length);
