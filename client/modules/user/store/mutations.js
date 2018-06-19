export default {
    setUserData(state, userData) {
        state.name = userData.name;
        state.profilePictureUrl = userData.profilePictureUrl;
    },
    resetUserData(state) {
        state.name = '';
        state.profilePictureUrl = null;
    }
};
