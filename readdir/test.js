var fs = require("fs");
//remove the leading .
var dirname = __dirname.replace(/^\./,'');

fs.readdir(dirname, function(err, files) {
  console.log('%s: %s', dirname, err || files.join(','));
});