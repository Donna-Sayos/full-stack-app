const pool = require("../config/db");

const getUsers = (req, res, next) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) {
      throw new Error(`Error getting all users: ${err.message}`);
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
