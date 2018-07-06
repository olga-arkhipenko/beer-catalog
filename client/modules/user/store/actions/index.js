import userService from 'userModule/services/userService';
import mutationTypes from 'userModule/store/mutations/constants';
import actionTypes from './contants';

export default {
    [actionTypes.SUBMIT_REGISTRATION](_, registrationData) {
        return userService.register(registrationData);
    },
    [actionTypes.SUBMIT_LOGIN]({ commit }, loginData) {
        return userService
            .login(loginData)
            .then((userData) => {
                commit(mutationTypes.SET_USER_DATA, userData);
            });
    },
    [actionTypes.SUBMIT_SIGN_OUT]({ commit }) {
        return userService
            .signOut()
            .then(() => commit(mutationTypes.RESET_USER_DATA));
    },
    [actionTypes.GET_CURRENT_USER_DATA]({ commit }) {
        return userService
            .getCurrentUser()
            .then((userData) => {
                commit(mutationTypes.SET_USER_DATA, userData);
            });
    }
};
