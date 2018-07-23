const database = require('../index');
const userMapper = require('../mappers/userMapper');

module.exports = {
    createUser(user) {
        return database.user
            .create({
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                password: user.password,
                salt: user.salt,
                profilePictureId: user.profilePictureId
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

