import userService from 'user/services/userService';

export default {
    submitRegistartion({ commit, state }, registrationData) {
        commit('setRegistrationData', registrationData);
        userService
            .register(state.registrationData)
            .then(() => commit('resetRegistrationData'))
            .catch(error => console.log(`Registration error: ${error}`));
    },
    submitLogin({ commit, state }, loginData) {
        commit('setLoginData', loginData);
        userService
            .login(state.loginData)
            .then((userData) => {
                console.log(JSON.stringify(userData));
                commit('setUserData', userData);
                commit('resetLoginData');
            })
            .catch(error => console.log(`Login error: ${error}`));
    },
    submitAddFavoriteBeer({ commit }, beerId) {
        commit('addFavoriteBeer', beerId);
    },
    submitRemoveFavoriteBeer({ commit }, beerId) {
        commit('removeFavoriteBeer', beerId);
    }
};
