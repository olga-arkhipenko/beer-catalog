const User = require('../models/User');
const UserDetails = require('../models/UserDetails');

module.exports = {
    mapToUser(userData) {
        const user = new User();
        user.name = userData.name;

        return user;
    },
    mapToUserDetails(userData) {
        const userDetails = new UserDetails();
        userDetails.name = userData.name;
        userDetails.profilePictureUrl = userData.profilePicture.url;

        return userDetails;
    }
};

