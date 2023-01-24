const pool = require("../db");
const queries = require("../db/queries/userQueries"); // this is the queries object that contains all the SQL queries;

const getUsers = (req, res, next) => {
  pool.query(queries.getUsers_, (err, results) => {
    if (err) {
      console.error(`Error getting all users: ${err.message}`);
    }
    if (results.rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No users found in the database.",
      });
    } else {
      res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
          users: results.rows,
        },
      });
    }
  });
};

const getUserById = (req, res, next) => {
  const ID = parseInt(req.params.id); // this is the id of the user that is being requested;
  pool.query(queries.getUserById_, [ID], (err, results) => {
    if (err) {
      console.error(`Error getting user with ID ${ID}: ${err.message}`);
    }
    if (!results.rows[0]) {
      return res.status(404).json({
        status: "fail",
        message: "User does not exist in the database.",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          user: results.rows,
        },
      });
    }
  });
};

const addUser = (req, res, next) => {
  const {
    username,
    fullname,
    email,
    age,
    address,
    dob,
    gender,
    hashed_password,
    user_id,
  } = req.body;
  pool.query(
    queries.checkEmailUsernameExist_,
    [username, email],
    (err, results) => {
      if (err) {
        console.error(`Error while checking if user exists: ${err.message}`);
        return res.status(500).json({
          status: "fail",
          message: "An error occurred, please try again later.",
        });
      }
      if (results.rows.length > 0) {
        return res.status(409).json({
          status: "fail",
          message: "User already exists in the database.",
        });
      }
      pool.query(
        queries.addUser_,
        [username, fullname, email, age, address, dob, gender, hashed_password, user_id],
        (err, results) => {
          if (err) {
            console.error(`Error adding user: ${err.message}`);
            return res.status(500).json({
              status: "fail",
              message: "An error occurred, please try again later.",
            });
          }
          return res.status(201).json({
            status: "success",
            message: "User created successfully.",
          });
        }
      );
    }
  );
};

const deleteUser = (req, res, next) => {
  const ID = parseInt(req.params.id);
  pool.query(queries.deleteUser_, [ID], (err, results) => {
    const noUserFound = results.rowCount === 0;
    if (err) {
      console.error(`Error deleting user with ID ${ID}: ${err.message}`);
      return res.status(500).json({
        status: "fail",
        message: "An error occurred, please try again later.",
      });
    } else if (noUserFound) {
      return res.status(404).json({
        status: "fail",
        message: "User does not exist in the database.",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "User deleted successfully.",
      });
    }
  });
};

const updateUser = (req, res, next) => {
  const ID = parseInt(req.params.id);
  const {
    username,
    fullname,
    email,
    age,
    address,
    dob,
    gender,
    hashed_password,
    user_id,
  } = req.body;
  pool.query(queries.getUserById_, [ID], (err, results) => {
    const noUserFound = results.rowCount === 0;
    if (err) {
      console.error(`Error updating user with ID ${ID}: ${err.message}`);
      return res.status(500).json({
        status: "fail",
        message: "An error occurred, please try again later.",
      });
    } else if (noUserFound) {
      return res.status(404).json({
        status: "fail",
        message: "User does not exist in the database.",
      });
    } else {
      pool.query(
        queries.updateUser_,
        [
          username,
          fullname,
          email,
          age,
          address,
          dob,
          gender,
          hashed_password,
          user_id,
        ],
        (err, results) => {
          if (err) {
            console.error(
              `Error updating user with ID ${ID}: ${err.message}`
            );
            return res.status(500).json({
              status: "fail",
              message: "An error occurred, please try again later.",
            });
          }
          res.status(200).json({
            status: "success",
            message: "User updated successfully.",
          });
        }
      );
    }
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
};
