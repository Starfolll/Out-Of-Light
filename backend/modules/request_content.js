const fs = require('fs');

const CONTENT_STATIC_PATH = "../frontend/static/";
const CONTENT_TEMPLATES_PATH = "../frontend/templates/";

module.exports = {
  index: {
    html: (res) => {
      fs.readFile(`${CONTENT_TEMPLATES_PATH}index.html`, 'utf8', function(err, data) {
        if (!err) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    },
    main_css: (res) => {
      fs.readFile(`${CONTENT_STATIC_PATH}css/main.css`, 'utf8', function(err, data) {
        if (!err) {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    }
  },

  error: {
    "404": (res) => {
      fs.readFile(`${CONTENT_TEMPLATES_PATH}404.html`, 'utf8', function(err, data) {
        if (!err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }
  }
}
