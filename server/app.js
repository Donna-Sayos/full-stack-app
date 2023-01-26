const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { join, extname } = require("path");
const logger = require("./utils/logger");

dotenv.config({ path: "./server/config/config.env" }); // loads environment variables from a .env file into process.env;

const app = express();
const corsOptions = { credentials: true, methods: ["GET, POST", "PUT", "DELETE"], origin: "http://localhost:4001" }; 

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json()); // this is for parsing application/json which means that the values of the object that is being sent to the server are in JSON format;
app.use(express.urlencoded({ extended: false })); // this is for parsing application/x-www-form-urlencoded which means that the values of the object that is being sent to the server are encoded in a URL format;

app.use(logger);
app.use(express.static(join(__dirname, "..", "public")));

app.use("/auth/v1", require("./routers/auth/index"));
app.use("/api/v1", require("./routers/api/index"));

app.use("/", (req, res) =>
  res.sendFile(join(__dirname, "..", "public/index.html"))
);

app.use((req, res, next) => {
  if (extname(req.path).length) {
    // if the path has an extension, then it is a file and not a route which means that it is not found;
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use(
  "*",
  (
    req,
    res // this is for handling routes that are not found and just sends the index.html file;
  ) => res.sendFile(join(__dirname, "..", "public/index.html"))
);

app.use((err, req, res, next) => {
  // this is for handling errors;
  res.status(err.status || 500);
  console.error(err);
  res.send(err.message || "Internal server error.");
});

module.exports = app;
