import userService from 'user/services/userService';

export default {
    submitRegistartion({ commit, state }, registrationData) {
        commit('setRegistrationData', registrationData);
        userService
            .register(state.registrationData)
            .then((/* userData */) => {
                // commit('setUserData', userData);
                commit('resetRegistrationData');
            });
    },
    submitLogin({ commit, state }, loginData) {
        commit('setLoginData', loginData);
        userService
            .login(state.loginData)
            .then((userData) => {
                console.log(`userres ${JSON.stringify(userData)}`);
                commit('setUserData', userData);
                commit('resetLoginData');
            });
    }
};
