const userRepository = require('../data/repositories/userRepository');
const passwordEncryptor = require('../utils/passwordEncryptor');

const mapper = databaseEntity => ({
    id: databaseEntity.dataValues.id,
    email: databaseEntity.dataValues.email,
    birthDate: databaseEntity.dataValues.birthDate,
    name: databaseEntity.dataValues.name
});

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
                    return mapper(userEntity);
                }
                throw new Error('Unable to create user');
            });
    }
};

