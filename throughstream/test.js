
var Transform = require('stream').Transform;
function through(transform, flush) {
  var t = new Transform();
  t._transform = transform;
  t._flush = flush;
  return t;
}

var stream = through(function(buff, enc, next) {
  console.log('push #%s bytes', buff.length);
  this.push(buff);
  next();
}, function() {
  console.log('end');
  this.push(null);
});

var fs = require("fs");

fs.createReadStream("./bar.txt").pipe(stream);
