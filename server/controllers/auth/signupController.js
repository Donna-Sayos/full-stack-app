const pool = require("../../db");
const bcrypt = require("bcrypt");
const queries = require("../../db/queries/userQueries");

const signup = async (req, res, next) => {
  try {
    const { username, fullname, email, age, address, dob, gender, password } =
      req.body;
    const hashed_password = await bcrypt.hash(password, 5);
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
      await pool.query(queries.addUser_, [
        username,
        fullname,
        email,
        age,
        address,
        dob,
        gender,
        hashed_password,
      ]);

      res.status(201).json({
        status: "success",
        message: "User added successfully.",
      });
    }
  } catch (err) {
    console.error(`Error adding user: ${err.message}`);
    res.status(500).json({
      status: "fail",
      message: "An error occurred, please try again later.",
    });
  }
};

module.exports = {
  signup,
};
