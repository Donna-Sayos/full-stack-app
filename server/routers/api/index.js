const router = require('express').Router();

router.use("/users", require("./users/user"));

module.exports = router;