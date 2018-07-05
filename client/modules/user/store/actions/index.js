import userService from 'userModule/services/userService';
import mutationTypes from 'userModule/store/mutations/constants';

export default {
    submitRegistration(_, registrationData) {
        return userService.register(registrationData);
    },
    submitLogin({ commit }, loginData) {
        return userService
            .login(loginData)
            .then((userData) => {
                commit(mutationTypes.SET_USER_DATA, userData);
            });
    },
    submitSignOut({ commit }) {
        return userService
            .signOut()
            .then(() => commit(mutationTypes.RESET_USER_DATA));
    },
    getCurrentUserData({ commit }) {
        return userService
            .getCurrentUser()
            .then((userData) => {
                commit(mutationTypes.SET_USER_DATA, userData);
            });
    }
};
