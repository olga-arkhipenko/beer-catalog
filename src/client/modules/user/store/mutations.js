export default {
    setRegistrationData(state, registrationData) {
        state.registrationData.name = registrationData.name;
        state.registrationData.email = registrationData.email;
        state.registrationData.birthdate = registrationData.birthdate;
        state.registrationData.password = registrationData.password;
    },
    setUserData(state, userData) {
        state.userData.name = userData.name;
        state.userData.email = userData.email;
        state.userData.birthdate = userData.birthdate;
    },
    setUserRegistered(state) {
        state.isRegistered = true;
    },
    resetRegistrationData(state) {
        state.registrationData = {
            name: '',
            email: '',
            birthdate: null,
            password: ''
        };
    },
    resetUserData(state) {
        state.userData = {
            name: '',
            email: '',
            birthdate: null
        };
    }
};
