const userRepository = require('../../dataAccess/repositories/userRepository');
const imageRepository = require('../../dataAccess/repositories/imageRepository');
const passwordEncryptor = require('../../utils/passwordEncryptor');
const userMapper = require('../../dataAccess/mappers/userMapper');
const imageMapper = require('../../dataAccess/mappers/imageMapper');
const cloudinaryManager = require('../../features/cloudinaryManagement/cloudinaryManager');

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
            .then(imageInfo => imageRepository.createImage({
                url: imageInfo.url,
                width: imageInfo.width,
                height: imageInfo.height
            }))
            .then(imageEntity => imageMapper.mapToImage(imageEntity));
    },
    login(loginData) {
        return userRepository
            .findUser(loginData.email)
            .then((user) => {
                if (user) {
                    if (passwordEncryptor.isMatch(loginData.password, user.salt, user.password)) {
                        return userMapper.mapToUser(user);
                    }
                    throw new Error('Login error. Wrong user password');
                } else {
                    throw new Error('Login error. Wrong user email');
                }
            });
    }
};

