import userService from 'userModule/services/userService';
import { setUserData, resetUserData } from '../mutations/constants';

export default {
    submitRegistration(_, registrationData) {
        return userService.register(registrationData);
    },
    submitLogin({ commit }, loginData) {
        return userService
            .login(loginData)
            .then((userData) => {
                commit(setUserData, userData);
            });
    },
    submitSignOut({ commit }) {
        return userService
            .signOut()
            .then(() => commit(resetUserData));
    },
    getCurrentUserData({ commit }) {
        return userService
            .getCurrentUser()
            .then((userData) => {
                commit(setUserData, userData);
            });
    }
};
