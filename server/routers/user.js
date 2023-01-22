const router = require('express').Router();

const controller = require('../controllers/userController'); // this is the controller object that contains all the controller functions;

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);

module.exports = router;