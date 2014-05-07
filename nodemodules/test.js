var express = require("express"),
    app = express(),
    http = require("http");

var server = http.createServer(app);

app.get("/", function(req, res) {
  res.send("hello");
});

server.on('listening', function() {
  console.log('listening!');

  //test server
  http.get({
    port: 3000
  }, function(res) {
    res.on('data', function(buff) {
      console.log(buff.toString());
    });
    res.on('end', function() {
      server.close();
    });
  });
});

server.listen(3000);

