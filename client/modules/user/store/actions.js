import userService from 'user/services/userService';

export default {
    submitRegistartion({ commit, state }, registrationData) {
        commit('setRegistrationData', registrationData);
        userService
            .register(state.registrationData)
            .then(() => commit('resetRegistrationData'));
    },
    submitLogin({ commit, state }, loginData) {
        commit('setLoginData', loginData);
        userService
            .login(state.loginData)
            .then((userData) => {
                commit('setUserData', userData);
                commit('resetLoginData');
            });
    },
    submitAddFavoriteBeer({ commit }, beerId) {
        commit('addFavoriteBeer', beerId);
    },
    submitRemoveFavoriteBeer({ commit }, beerId) {
        commit('removeFavoriteBeer', beerId);
    }
};
