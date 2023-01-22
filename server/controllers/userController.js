const pool = require("../config/db");
const queries = require("../db/queries/userQueries");

const getUsers = (req, res, next) => {
  pool.query(queries.getAllUsers, (err, results) => {
    if (err) {
      console.error(`Error getting all users: ${err.message}`);
    }
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            users: results.rows,
        }
    })
  });
};

module.exports = {
  getUsers,
};
