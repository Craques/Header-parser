var acceptLanguage = require("accept-language"); //module to parse the accepted languages

module.exports = function(app){
  app.route("/")
      .get(function(req,res){
        var language = acceptLanguage.parse(req.headers['accept-language']); //get languages in an objects array
        var os = process.platform; //get browser operating system
        var ip = req.connection.remoteAddress; // get ip adress of browser
        console.log(language);
        var userObj = {"language":language[0].value, "os":os, "ip":ip};
        console.log(userObj);
      })
}


