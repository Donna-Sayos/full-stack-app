const pool = require("../config/db");
const queries = require("../db/queries/userQueries"); // this is the queries object that contains all the SQL queries;

const getUsers = (req, res, next) => {
  pool.query(queries.getUsers_, (err, results) => {
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

const getUserById = (req, res, next) => {
    const ID = parseInt(req.params.id); // this is the id of the user that is being requested;
    pool.query(queries.getUserById_, [ID], (err, results) => {
        if (err) {
            console.error(`Error getting user with ID ${ID}: ${err.message}`);
        }
        res.status(200).json({
            status: "success",
            data: {
                user: results.rows,
            }
        })
    })
};

module.exports = {
  getUsers,
  getUserById,
};
