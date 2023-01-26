const pool = require("../../db");
const bcrypt = require("bcrypt");
const queries = require("../../db/queries/userQueries");
const jwt = require("jsonwebtoken");
const session = require("express-session");

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Missing required fields.",
      });
    }
    const checker = await pool.query(queries.checkUsername, [
      username,
    ]);
    if (checker.rows.length > 0) {
      const user = checker.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        res.status(200).json({
          status: "success",
          message: "User logged in successfully.",
        });
      } else {
        res.status(401).json({
          status: "fail",
          message: "Incorrect password.",
        });
      }
    } else {
      res.status(401).json({
        status: "fail",
        message: "Incorrect username.",
      });
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
