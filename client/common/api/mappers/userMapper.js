import User from 'userModule/models/User';

export default {
    mapToUser(userData) {
        const user = new User();
        user.name = userData.name;
        user.profilePictureUrl = userData.profilePictureUrl;

        return user;
    }
};

