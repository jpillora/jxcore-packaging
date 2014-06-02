
var path = require("path");
var foofoo = require("./foo/foo.js") +  //works
             require(path.join(__dirname,"foo","foo.js")); //DOESN'T work

console.log(foofoo);