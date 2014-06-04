
var path = require("path");
var foofoo = require("./foo/foo.js") +
             require(path.join(__dirname,"foo","foo.js"));

console.log(foofoo);