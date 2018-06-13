import userService from '../services/userService';

export default {
    submitRegistartion(_, registrationData) {
        userService.register(registrationData);
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
    },
    submitAddFavoriteBeer({ commit }, beerId) {
        commit('addFavoriteBeer', beerId);
    },
    submitRemoveFavoriteBeer({ commit }, beerId) {
        commit('removeFavoriteBeer', beerId);
    }
};
