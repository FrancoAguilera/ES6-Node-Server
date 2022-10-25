module.exports = (app) => {
  const logger = require("morgan");
  const bodyParser = require("body-parser");

  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
