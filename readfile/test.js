var fs = require("fs");
var path = require("path");

var full = path.join(__dirname, 'bar.txt');
var rela = path.join('.','bar.txt');

function sync(name, p) {
  var err, contents;
  try {
    contents = fs.readFileSync(p);
  } catch(e) { err = e; }
  console.log("sync '%s': %s", name, err || 'OK');
}

function async(name, p) {
  fs.readFile(p, function(err) {
    console.log("async '%s': %s", name, err || 'OK');
  });
}

function test(name, p) {
  console.log("async '%s' run...", name);
  async(name, p);
  console.log("sync '%s' run...", name);
  sync(name, p);
  console.log("end '%s'", name);
}

//read full path (prevent async race)
setTimeout(function() {
  test('full', full);
}, 20);
setTimeout(function() {
  test('rela', rela);
}, 40);
setTimeout(function() {
  test('reso', path.resolve(rela));
}, 60);

