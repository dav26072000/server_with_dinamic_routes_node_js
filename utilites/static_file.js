const fs = require("fs");
const { mainTypes } = require("./main_types");

const staticFiles = (res, filePath, ext) => {
  res.setHeader("Content-Type", mainTypes[ext]);
  fs.readFile(`./public${filePath}`, (err, data) => {
    console.log(`./public${filePath}`);
    if (err) {
      res.statusCode = 404;
      res.end();
    }
    res.end(data);
  });
};

module.exports = { staticFiles };
