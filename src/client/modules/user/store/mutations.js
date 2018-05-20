export default {
    setUserData(state, userData) {
        state.userData.name = userData.name;
        state.userData.email = userData.email;
        state.userData.birthdate = userData.birthdate;
        state.userData.password = userData.password;
    },
    setUserRegistered(state) {
        state.isRegistered = true;
    }
};
