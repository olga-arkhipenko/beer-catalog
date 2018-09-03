const User = require('../models/user');
const UserDetails = require('../models/userDetails');
const RegistrationData = require('../models/registrationData');

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
    },
    mapToRegistrationData(data) {
        const registrationData = new RegistrationData();
        registrationData.name = data.name;
        registrationData.email = data.email;
        registrationData.birthdate = data.birthdate;
        registrationData.password = data.password;
        registrationData.profilePicture = data.profilePicture;

        return registrationData;
    }
};

