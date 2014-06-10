var buff = null;

try {
  buff = require('fs').readFileSync('./assets/foo.txt');
} catch(err) {}

var path = require('path');

var rela = path.relative(__dirname, process.cwd());

console.log('"%s": %s', rela, buff);
