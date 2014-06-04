var fs = require("fs");
console.log('foo: %s', fs.readFileSync('./sub/foo.txt'));