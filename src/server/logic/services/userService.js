const userRepository = require('../../data/repositories/userRepository');
const passwordEncryptor = require('../../utils/passwordEncryptor');
const userMapper = require('../../data/mappers/userMapper');

module.exports = {
    register(userData) {
        console.log('hello from service');
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
                console.log(`${userEntity} userEntity`);
                if (userEntity) {
                    return userMapper.mapToUser(userEntity);
                }
                throw new Error('Unable to create user');
            });
    }
};

