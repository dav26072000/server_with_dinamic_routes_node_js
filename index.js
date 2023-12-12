// Modules
const http = require("http");
const fs = require("fs");
const path = require("path");
// Constants
const { projectInfo } = require("./constants");
// Dinamic file reader function
const { staticFiles } = require("./utilites/static_file");
// Main types
const { mainTypes } = require("./utilites/main_types");

// Server actions
const handleServerActions = (req, res) => {
  const url = req.url;
  switch (url) {
    case "/main":
      staticFiles(res, `/html${url}.html`, ".html");
      break;

    default:
      const ext = String(path.extname(url)).toLocaleLowerCase();
      if (ext in mainTypes) {
        staticFiles(res, url, ext);
      } else {
        res.statuscode = 404;
        res.end();
      }

      break;
  }
};

http.createServer(handleServerActions).listen(projectInfo.PORT);
