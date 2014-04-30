var cluster = require('cluster');

if (cluster.isMaster) {
  console.log('I am master');
  cluster.fork();
  setTimeout(function() {
    cluster.fork();
  }, 20);
} else if (cluster.isWorker) {
  console.log('I am worker #' + cluster.worker.id);
  process.exit(0);
}