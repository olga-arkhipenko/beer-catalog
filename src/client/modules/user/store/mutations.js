export default {
    setRegistrationData(state, registrationData) {
        state.registrationData.name = registrationData.name;
        state.registrationData.email = registrationData.email;
        state.registrationData.birthdate = registrationData.birthdate;
        state.registrationData.password = registrationData.password;
    },
    setLoginData(state, loginData) {
        state.loginData.email = loginData.email;
        state.loginData.password = loginData.password;
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
    resetLoginData(state) {
        state.loginData = {
            email: '',
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
