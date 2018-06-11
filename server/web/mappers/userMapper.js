const User = require('../models/User');

module.exports = {
    mapToUser(userData) {
        const user = new User();
        user.name = userData.name;
        user.profilePictureUrl = userData.profilePicture.url;

        return user;
    }
};

