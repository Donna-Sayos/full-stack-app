const pool = require("../../db");
const bcrypt = require("bcrypt");
const queries = require("../../db/queries/userQueries");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const login = async (req, res, next) => {
  console.log("login function called"); // added console log statement
  try {
    const { username, email, password } = req.body;
    console.log("req.body: ", req.body); // added console log statement
    const checker = await pool.query(queries.checkEmailUsernameExist_, [
      username,
      email,
    ]);
    console.log("checker: ", checker); // added console log statement

    if (checker.rows.length > 0) {
      const user = checker.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        console.log("password match"); // added console log statement
        res.status(200).json({
          status: "success",
          message: "User logged in successfully.",
        });
      } else {
        console.log("password do not match"); // added console log statement
        res.status(401).json({
          status: "fail",
          message: "Incorrect password.",
        });
      }
    } else {
      console.log("email or username incorrect"); // added console log statement
    }
  } catch (err) {
    console.error(`Error logging in user: ${err.message}`);
    res.status(500).json({
      status: "fail",
      message: "An error occurred, please try again later.",
    });
  }
};

module.exports = {
  login,
};
