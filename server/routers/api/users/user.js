const router = require("express").Router();

const controller = require("../../../controllers/api/userController"); // this is the controller object that contains all the controller functions;

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/:id", controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
