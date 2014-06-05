var fs = require("fs");

var stream = fs.createReadStream("./bar.txt");

var bytes = 0;
stream.on('data', function(buff) {
  bytes += buff.length;
});

stream.on('end', function() {
  console.log('bytes #%s', bytes);
});
