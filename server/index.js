const chalk = require("chalk");
const app = require("./app");

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