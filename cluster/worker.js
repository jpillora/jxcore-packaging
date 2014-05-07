var cluster = require('cluster');
console.log('I am worker #' + cluster.worker.id);
process.exit(0);