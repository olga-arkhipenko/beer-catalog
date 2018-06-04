const router = require('express').Router();
const userController = require('../../controllers/userController');

router.post('/', userController.uploadProfilePicture);

module.exports = router;
