//importing all the dependencies
var express = require("express");
//var os = require("os");
var app = express();
//var handlebars = require("express-handlebars");

app.get("/", function(req, res){
  res.send(process.platform + "," + req.connection.remoteAddress);
  //console.log(process.platform());
});

//starting the server
var port = process.env.PORT || 3000;
app.listen(port);
console.log("app listening on port " + port);