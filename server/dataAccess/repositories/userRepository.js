const database = require('../index');

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
            });
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
            });
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
            });
    }
};

