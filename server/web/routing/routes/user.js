const router = require('express').Router();
const userController = require('../../controllers/userController');

router.post('/login', userController.login);
router.post('/registration', userController.register);
router.post('/uploadImage', userController.uploadProfilePicture);
router.get('/', userController.getUser);

module.exports = router;
