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
app.use(express.static(path.join(__dirname, "..", "public")));


app.use("/api/v1/users", require("./routers/user"));

app.use("/", (req, res) =>
res.sendFile(path.join(__dirname, "..", "public/index.html"))
);


app.use((req, res, next) => {
  if (path.extname(req.path).length) { // if the path has an extension, then it is a file and not a route which means that it is not found;
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use("*", (req, res) => // this is for handling routes that are not found and just sends the index.html file;
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.use((err, req, res, next) => { // this is for handling errors;
  res.status(err.status || 500);
  console.error(err);
  res.send(err.message || "Internal server error.");
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
