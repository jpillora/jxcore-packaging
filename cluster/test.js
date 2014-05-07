var cluster = require('cluster');

if (cluster.isMaster) {
  require('./master.js');
} else if (cluster.isWorker) {
  require('./worker.js');
}