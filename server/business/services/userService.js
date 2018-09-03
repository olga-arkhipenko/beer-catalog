const userRepository = require('../../dataAccess/repositories/userRepository');
const imageRepository = require('../../dataAccess/repositories/imageRepository');
const passwordEncryptor = require('../../utils/passwordEncryptor');
const userMapper = require('../mappers/userMapper');
const imageMapper = require('../mappers/imageMapper');
const cloudinaryManager = require('../../integration/cloudinaryManagement/cloudinaryManager');

module.exports = {
    async register(registrationData) {
        const salt = passwordEncryptor.createSalt().toString();
        const encryptedPassword = passwordEncryptor.encrypt(registrationData.password, salt);
        const userData = userMapper.mapToUserData(registrationData, salt, encryptedPassword);
        const userEntity = await userRepository.createUser(userData);
        return userMapper.mapToUser(userEntity);
    },
    async uploadProfilePicture(uploadedData) {
        const uploadedImageData = await cloudinaryManager.upload(uploadedData);
        const imageData = imageMapper.mapToImageData(uploadedImageData);
        const imageEntity = await imageRepository.createImage(imageData);
        return imageMapper.mapToImage(imageEntity);
    },
    async login(loginData) {
        const userEntity = await userRepository.findUserByEmail(loginData.email);
        const isPasswordMatch = passwordEncryptor.isMatch(loginData.password, userEntity.salt, userEntity.password);
        if (userEntity) {
            if (isPasswordMatch) {
                return userMapper.mapToUserDetails(userEntity);
            } throw new Error('Login error. Wrong user password');
        } throw new Error('Login error. Wrong user email');
    },
    async getUser(userId) {
        const userEntity = await userRepository.findUserById(userId);
        if (userEntity) {
            return userMapper.mapToUserDetails(userEntity);
        }
        throw new Error('User not found.');
    }
};

