const chalk = require("chalk");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const logger = require("./utils/logger");

dotenv.config({ path: "./server/config/config.env" }); // loads environment variables from a .env file into process.env;

const app = express();

app.use(morgan("dev"));
app.use(express.json()); // this is for parsing application/json which means that the values of the object that is being sent to the server are in JSON format;
app.use(express.urlencoded({ extended: false })); // this is for parsing application/x-www-form-urlencoded which means that the values of the object that is being sent to the server are encoded in a URL format;
app.use(logger);

const userRoutes = require("./routers/user");

app.use("/api/v1/users", userRoutes);

app.use("/", (req, res) => {
  // test route;
  res.send("Hello World!");
});

const PORT = process.env.PORT || 4001;

const server = app.listen(PORT, () => {
  console.log(
    chalk.cyanBright(
      `Server running in ${chalk.blueBright(
        process.env.NODE_ENV
      )} mode on PORT: ${chalk.blueBright(PORT)} 🔊🔊🔊`
    )
  );
});

process.on("unhandledRejection", (err) => {
  // this is for handling unhandled promise rejections;
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1)); // server.close() is returned by app.listen() and is used to close the server;
});
