var fs = require("fs");
var path = require("path");

var full = path.join(__dirname, 'bar.txt');
var rela = path.join('.','bar.txt');

function sync(p) {
  var err, contents;
  try {
    contents = fs.readFileSync(p);
  } catch(e) { err = e; }
  console.log("sync '%s': %s", p, err ? 'FAIL': 'PASS');
}

function async(p) {
  fs.readFile(p, function(err, contents) {
    console.log("async '%s': %s", p, err ? 'FAIL': 'PASS');
  });
}

function test(p) {
  sync(p);
  async(p);
}

//read full path
test(full);
test(rela);
test(path.resolve(rela));
