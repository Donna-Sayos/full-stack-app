const dotenv = require("dotenv");
dotenv.config({ path: "./server/config/config.env" });

const Pool = require("pg").Pool; // this is a class that creates a connection pool to a PostgreSQL database;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;