const router = require("express").Router();

const controller = require("../../../controllers/api/userController"); // this is the controller object that contains all the controller functions;
const checkAdmin = require("../../../utils/isAdmin");
const checkToken = require("../../../utils/checkToken");

router.get("/", checkToken, checkAdmin, controller.getUsers);
router.post("/", checkToken, checkAdmin, controller.addUser);
router.get("/:id", checkToken, checkAdmin, controller.getUserById);
router.put("/:id", checkToken, controller.updateUser);
router.delete("/:id", checkToken, controller.deleteUser);

module.exports = router;
