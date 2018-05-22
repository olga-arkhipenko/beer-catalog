const userRepository = require('../../data/repositories/userRepository');
const passwordEncryptor = require('../../utils/passwordEncryptor');
const userMapper = require('../../data/mappers/userMapper');

module.exports = {
    register(userData) {
        const salt = passwordEncryptor.createSalt().toString();
        const user = {
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            password: passwordEncryptor.encrypt(userData.password, salt),
            salt
        };
        return userRepository
            .createUser(user)
            .then((userEntity) => {
                if (userEntity) {
                    return userMapper.mapToUser(userEntity);
                }
                throw new Error('Unable to create user');
            });
    },
    login(loginData) {
        console.log('hello from login service');
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

