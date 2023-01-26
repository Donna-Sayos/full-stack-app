const router = require("express").Router();

const loginController = require("../../controllers/auth/loginController");
const signupController = require("../../controllers/auth/signupController");

router.post("/login", loginController.login);
router.post("/signup", signupController.signup);

module.exports = router;
