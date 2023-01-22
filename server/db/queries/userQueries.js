const getUsers_ = "SELECT * FROM users";
const getUserById_ = "SELECT * FROM users WHERE id = $1;"

module.exports = {
    getUsers_,
    getUserById_,
};
