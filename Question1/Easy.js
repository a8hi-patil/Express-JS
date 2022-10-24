// Question :Simulate a backend, by using ExpressJS and Process.env to handle the listening port of your backend.
// If there is no environmental port provided, you can use a port 5000 for running your backend server.

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
  res.end();
});

// Using PORT 5000 if there is no default port
var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Strated on", port);
});
