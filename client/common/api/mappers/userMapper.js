import User from 'userModule/models/User';
import UserDetails from 'userModule/models/UserDetails';

export default {
    mapToUser(userData) {
        const user = new User();
        user.name = userData.name;

        return user;
    },
    mapToUserDetails(userData) {
        const userDetails = new UserDetails();
        userDetails.name = userData.name;
        userDetails.profilePictureUrl = userData.profilePictureUrl;

        return userDetails;
    }
};

