const router = require("express").Router();

const controller = require("../../../controllers/api/userController"); // this is the controller object that contains all the controller functions;
const checkAdmin = require("../../../utils/isAdmin");

router.get("/", checkAdmin, controller.getUsers);
router.post("/", checkAdmin, controller.addUser);
router.get("/:id", checkAdmin, controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
