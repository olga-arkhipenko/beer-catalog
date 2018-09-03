const User = require('../models/user');
const UserDetails = require('../models/userDetails');
const RegistrationData = require('../models/registrationData');
const LoginData = require('../models/loginData');

module.exports = {
    mapToUser(data) {
        const user = new User();
        user.name = data.name;

        return user;
    },
    mapToUserDetails(data) {
        const userDetails = new UserDetails();
        userDetails.name = data.name;
        userDetails.profilePictureUrl = data.profilePicture.url;

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
    },
    mapToLoginData(data) {
        const loginData = new LoginData();
        loginData.email = data.email;
        loginData.password = data.password;

        return loginData;
    }
};

