const RESPONSE_CONTENT = require('./modules/request_content.js');
const HTTP = require("http");

const PATH = {
  "/": (res) => RESPONSE_CONTENT.index.html(res),
  "/css/main.css": (res) => RESPONSE_CONTENT.index.main_css(res),
  "404": (res) => RESPONSE_CONTENT.error["404"](res)
}

HTTP.createServer(
  (req, res) => {
    Server.PrintResponse(req);
    Server.Response(req, res);
  }
).listen(3000, () => Server.StartAlert());

class Server {
  static PrintTime() {
    let data = new Date();
    console.log("| " + data.getHours() + " : " + data.getMinutes() + " : " + data.getSeconds());
  }

  static StartAlert() {
    console.log(" ______________");
    this.PrintTime();
    console.log(
      " ______________ " + "\n" +
      "| I am working " + "\n" +
      "|______________" + "\n"
    );
  }

  static LogData(data) {
    console.log(" ______________ ");
    this.PrintTime();
    for (var i = 0; i < data.length; i++) {
      console.log("| " + data[i]);
    }
    console.log("|______________ ");
  }

  static PrintResponse(req) {
    this.LogData([
      "Requested url : " + req.url,
      "Method : " + req.method
    ]);
  }

  static Response(req, res) {
    if (!!PATH[req.url]) {
      PATH[req.url](res);
    } else {
      PATH["404"](res);
    }
  }
}
