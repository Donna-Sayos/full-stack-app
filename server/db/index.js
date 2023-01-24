require("dotenv").config({ path: "./server/config/config.env" });
const Pool = require("pg").Pool; // this is a class that creates a connection pool to a PostgreSQL database;

// const isDevelopment = process.env.NODE_ENV;
const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
});

module.exports = pool;
