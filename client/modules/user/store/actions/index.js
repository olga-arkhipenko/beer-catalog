import userService from 'userModule/services/userService';
import { setUserData, resetUserData } from '../mutations/constants';

export default {
    submitRegistration(_, registrationData) {
        return userService.register(registrationData);
    },
    submitLogin({ commit }, loginData) {
        userService
            .login(loginData)
            .then((userData) => {
                commit(setUserData, userData);
            });
    },
    submitSignOut({ commit }) {
        userService
            .signout()
            .then(() => commit(resetUserData));
    },
    getCurrentUserData({ commit }) {
        userService
            .getCurrentUser()
            .then((userData) => {
                commit(setUserData, userData);
            });
    }
};