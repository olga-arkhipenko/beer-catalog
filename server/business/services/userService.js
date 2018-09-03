const userRepository = require('../../dataAccess/repositories/userRepository');
const imageRepository = require('../../dataAccess/repositories/imageRepository');
const passwordEncryptor = require('../../utils/passwordEncryptor');
const userMapper = require('../mappers/userMapper');
const imageMapper = require('../mappers/imageMapper');
const cloudinaryManager = require('../../integration/cloudinaryManagement/cloudinaryManager');

module.exports = {
    register(userData) {
        const salt = passwordEncryptor.createSalt().toString();
        const user = {
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            password: passwordEncryptor.encrypt(userData.password, salt),
            salt,
            profilePictureId: userData.profilePicture.id
        };
        return userRepository
            .createUser(user)
            .then(userEntity => userMapper.mapToUser(userEntity));
    },
    uploadProfilePicture(image) {
        return cloudinaryManager
            .upload(image)
            .then(imageData => imageRepository.createImage({
                url: imageData.url,
                width: imageData.width,
                height: imageData.height
            }))
            .then(imageEntity => imageMapper.mapToImage(imageEntity));
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

