const pool = require("../db");
const queries = require("../db/queries/userQueries"); // this is the queries object that contains all the SQL queries;

const getUsers = async (req, res, next) => {
  try {
    const users = await pool.query(queries.getUsers_);
    const noUsersFound = users.rows.length === 0;

    if (noUsersFound) {
      return res.status(404).json({
        status: "fail",
        message: "No users found in the database.",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          users: users.rows,
        },
      });
    }
  } catch (err) {
    console.error(`Error getting users: ${err.message}`);
    res.status(500).json({
      status: "fail",
      message: "An error occurred, please try again later.",
    });
  }
};

const getUserById = async (req, res, next) => {
  let ID;
  try {
    ID = parseInt(req.params.id); // parseInt is used to convert the id string to an integer;
    const user = await pool.query(queries.getUserById_, [ID]); // the second argument is an array of values that will be used to replace the $1, $2, $3, etc. in the SQL query;
    const noUserFound = user.rows.length === 0;

    if (noUserFound) {
      return res.status(404).json({
        status: "fail",
        message: "User does not exist in the database.",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          user: user.rows[0], // the first element of the array is the user object;
        },
      });
    }
  } catch (err) {
    console.error(`Error getting user with ID ${ID}: ${err.message}`);
    res.status(500).json({
      status: "fail",
      message: "An error occurred, please try again later.",
    });
  }
};

const addUser = async (req, res, next) => {
  try {
    const { username, fullname, email, age, address, dob, gender, hashed_password } = req.body;
    const checker = await pool.query(queries.checkEmailUsernameExist_, [
      username,
      email,
    ]);

    if (checker.rows.length > 0) {
      return res.status(409).json({
        status: "fail",
        message: "User exists.",
      });
    } else {
      await pool.query(queries.addUser_, [ username, fullname, email, age, address, dob, gender, hashed_password ]);

      res.status(201).json({
        status: "success",
        message: "User added successfully.",
      })
    }
  } catch (err) {
    console.error(`Error adding user: ${err.message}`);
    res.status(500).json({
      status: "fail",
      message: "An error occurred, please try again later.",
    });
  }
};

const deleteUser = async (req, res, next) => {
  let ID;
  try {
    ID = parseInt(req.params.id);
    const user = await pool.query(queries.getUserById_, [ID]);
    const noUserFound = user.rows.length === 0;

    if (noUserFound) {
      return res.status(404).json({
        status: "fail",
        message: "User does not exist in the database.",
      });
    } else {
      await pool.query(queries.deleteUser_, [ID]);
      res.status(200).json({
        status: "success",
        message: "User deleted successfully.",
      });
    }
  } catch (err) {
    console.error(`Error deleting user with ID ${ID}: ${err.message}`);
    res.status(500).json({
      status: "fail",
      message: "An error occurred, please try again later.",
    });
  }
};

const updateUser = async (req, res, next) => {
  let ID;
  try {
    ID = parseInt(req.params.id);
    const { username, fullname, email, age, address, dob, gender, hashed_password, user_id } = req.body;
    const user = await pool.query(queries.getUserById_, [ID]);
    const noUserFound = user.rows.length === 0;

   if (noUserFound) {
    return res.status(404).json({
      status: "fail",
      message: "User does not exist in the database.",
    });
   } else {
      await pool.query(queries.updateUser_, [ username, fullname, email, age, address, dob, gender, hashed_password, user_id, ID ]);

      res.status(200).json({
        status: "success",
        message: "User updated successfully.",
      });
   }
  } catch (err) {
    console.error(`Error updating user with ID ${ID}: ${err.message}`);
    res.status(500).json({
      status: "fail",
      message: "An error occurred, please try again later.",
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
};
