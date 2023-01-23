const getUsers_ = "SELECT * FROM users";

const getUserById_ = "SELECT * FROM users WHERE id = $1;";

const checkEmailUsernameExist_ =
  "SELECT s FROM users s WHERE s.username = $1 OR s.email = $2;";

const addUser_ =
  "INSERT INTO users (username, fullname, email, age, address, dob, gender, hashed_password) VALUES ($1, $2, $3, $4, $5, $6, $7, crypt($8, gen_salt('bf', 8)));";

const updateUser_ =
  "UPDATE users SET username = $1, fullname = $2, email = $3, age = $4, address = $5, dob = $6, gender = $7, hashed_password = crypt($8, gen_salt('bf', 8)) WHERE id = $9;";

const deleteUser_ = "DELETE FROM users WHERE id = $1;";

module.exports = {
  getUsers_,
  getUserById_,
  checkEmailUsernameExist_,
  addUser_,
  updateUser_,
  deleteUser_,
};
