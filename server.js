//importing all the dependencies
var express = require("express");
var app = express();
var handlebars = require("express-handlebars");
var routes = require("./routes/index.js");
var favicon = require("serve-favicon");

//enable stylesheet and js files to use public route
app.use('/public', express.static(process.cwd() + "/public"));
app.use(favicon(__dirname + "/favicon.ico"));

//express-handlebars will be my view engine
app.set("views", __dirname +"/views");
app.engine("handlebars", handlebars({defaultLayout: "main", layoutsDir: __dirname + "/views/layouts"}));
app.set("view engine", "handlebars");

//starting the server
routes(app);
var port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1');
console.log("app listening on port " + port);