const router = require("express").Router();

const checkToken = require("../../utils/checkToken");
const loginController = require("../../controllers/auth/loginController");
const signupController = require("../../controllers/auth/signupController");

router.post("/login", checkToken, loginController.login);
router.post("/signup", signupController.signup);

module.exports = router;
