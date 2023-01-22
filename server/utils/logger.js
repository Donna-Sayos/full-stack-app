const chalk = require("chalk");

const logger = (req, res, next) => {
  console.log(
    chalk.magentaBright(
      `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}` // example: GET http://localhost:5000/api/v1/bootcamps
    )
  );
  next();
};

module.exports = logger;
