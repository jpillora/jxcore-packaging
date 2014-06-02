var express = require("express");
var app = express();
// var http = require("http");

console.log('express app created: %s', !!app);

// var server = http.createServer(app);

// app.get("/", function(req, res) {
//   res.send("hello");
// });

// server.on('listening', function() {
//   console.log('listening!');

//   //test server
//   http.get({
//     port: 3000
//   }, function(res) {
//     res.on('data', function(buff) {
//       console.log(buff.toString());
//     });
//     res.on('end', function() {
//       server.close();
//     });
//   });
// });

// server.listen(3000);

