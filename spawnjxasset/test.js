var cp = require("child_process");
var path = require("path");

console.log("parent: loading: child.jx");
var proc = cp.fork("child.jx", {stdio:"inherit"});
proc.on("exit", function() {
  console.log("parent: child.js exited");
});