
//found 'files'  with `find . -type f      -name '*.js*' | pbcopy`
//found 'assets' with `find . -type f -not -name '*.js*' | pbcopy`
var level = require("level");
console.log('level: %s', !!level);