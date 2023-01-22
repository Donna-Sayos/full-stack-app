const chalk = require("chalk");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");

dotenv.config({ path: "./server/config/config.env" }); // loads environment variables from a .env file into process.env;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json()); // this is for parsing JSON encoded bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false })); // this is for parsing URL encoded bodies (as sent by HTML forms) .urlencoded() takes an option object that allows you to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true);
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 4001;

const server = app.listen(PORT, () => {
  console.log(
    chalk.cyanBright(
      `Server running in ${chalk.blueBright(process.env.NODE_ENV)} mode on PORT: ${chalk.blueBright(PORT)} 🔊🔊🔊`
    )
  );
});

process.on("unhandledRejection", (err) => {
  // takes an EVENT and a CALLBACK; the "unhandledRejection" event is emitted whenever a Promise is rejected and no error handler is attached to the promise;
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1)); // server.close() is returned by app.listen() and is used to close the server;
  // it takes a callback that exits the process with a non-zero exit code which meant that the process failed due to an unhandled promise rejection;
});
