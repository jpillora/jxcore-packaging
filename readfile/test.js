var fs = require("fs");
//remove the leading .
var dirname = __dirname.replace(/^\./,'');

fs.readFile('bar.txt', function(err, contents) {
  console.log('%s/bar.txt: %s', dirname, err || contents);
});