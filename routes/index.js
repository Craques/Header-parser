var acceptLanguage = require("accept-language"); //module to parse the accepted languages
var osParser = require("ua-parser");//module offers better os parameters

module.exports = function(app){
  app.route("/")
      .get(function(req,res){
          var deviceParams = req.headers['user-agent'];
          var language = acceptLanguage.parse(req.headers['accept-language']); //get languages in an objects array
          var os = osParser.parse(deviceParams); //get browser operating system
          var ip = req.headers['x-forwarded-for'] ||
              req.connection.remoteAddress ||
              req.socket.remoteAddress ||
              req.connection.socket.remoteAddress;; // get ip adress of browser

          var userObj = {"language":language[0].value, "os":os.os.family, "ip":ip};

          console.log(userObj);
          res.render("layout", userObj);
      })
}


