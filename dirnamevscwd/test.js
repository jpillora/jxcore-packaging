var cp = require("child_process");
var path = require('path');
var child = path.join(__dirname, "child.jx");

setTimeout(function() {
  console.log("running: child.jx in './'");
  var proc = cp.fork(child, {stdio:"inherit", cwd: './'});
  proc.on("exit", function() {
    console.log("parent: child.js exited");
  });
}, 20);

setTimeout(function() {
  console.log("running: child.jx in '../'");
  var proc = cp.fork(child, {stdio:"inherit", cwd: '../'});
  proc.on("exit", function() {
    console.log("parent: child.js exited");
  });
}, 60);



