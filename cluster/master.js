var cluster = require('cluster');
console.log('I am master');
cluster.fork();
setTimeout(function() {
  cluster.fork();
}, 20);