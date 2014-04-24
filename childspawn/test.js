var cp = require("child_process");
var path = require("path");

var file = path.join(__dirname, "child.js");
console.log("parent: loading: %s", file);
var proc = cp.fork(file, {stdio:"inherit"});
proc.on("exit", function() {
  console.log("parent: child.js exited");
});