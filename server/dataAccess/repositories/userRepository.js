const database = require('../index');
const userMapper = require('../mappers/userMapper');

module.exports = {
    createUser(userData) {
        return database.user
            .create({
                name: userData.name,
                email: userData.email,
                birthdate: userData.birthdate,
                password: userData.password,
                salt: userData.salt,
                profilePictureId: userData.profilePictureId
            })
            .then(userModel => userMapper.mapToUser(userModel));
    },
    findUserByEmail(email) {
        return database.user
            .findOne({
                where: {
                    email
                },
                include: [{
                    model: database.image,
                    as: 'profilePicture'
                }]
            })
            .then(userModel => userMapper.mapToUserDetails(userModel));
    },
    findUserById(userId) {
        return database.user
            .findOne({
                where: {
                    id: userId
                },
                include: [{
                    model: database.image,
                    as: 'profilePicture'
                }]
            })
            .then(userModel => userMapper.mapToUserDetails(userModel));
    }
};

