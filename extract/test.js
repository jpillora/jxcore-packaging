
//found 'files'  with `find . -type f      -name '*.js*' | pbcopy`
//found 'assets' with `find . -type f -not -name '*.js*' | pbcopy`
var fs = require("fs");
console.log('foo: %s', fs.readFileSync('./foo.txt'));