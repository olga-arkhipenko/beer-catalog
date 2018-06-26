import userService from '../services/userService';

export default {
    submitRegistration(_, registrationData) {
        userService.register(registrationData)
            .catch(() => console.log('helolo'));
    },
    submitLogin({ commit }, loginData) {
        userService
            .login(loginData)
            .then((userData) => {
                commit('setUserData', userData);
            });
    },
    submitSignOut({ commit }) {
        userService
            .signout()
            .then(() => commit('resetUserData'));
    },
    getCurrentUserData({ commit }) {
        userService
            .getCurrentUser()
            .then((userData) => {
                commit('setUserData', userData);
            });
    }
};
