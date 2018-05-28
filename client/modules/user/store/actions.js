import userService from 'user/services/userService';

export default {
    submitRegistartion({ commit, state }, registrationData) {
        commit('setRegistrationData', registrationData);
        console.log(state.registrationData.profilePicture);
        userService
            .register(state.registrationData, state.registrationData.profilePicture)
            .then(() => commit('resetRegistrationData'))
            .catch(err => console.error(`User data problem: ${err}`));
    },
    submitLogin({ commit, state }, loginData) {
        commit('setLoginData', loginData);
        userService
            .login(state.loginData)
            .then((userData) => {
                commit('setUserData', userData);
                commit('resetLoginData');
            })
            .catch(err => console.error(`Login error: ${err}`));
    },
    submitAddFavoriteBeer({ commit }, beerId) {
        commit('addFavoriteBeer', beerId);
    },
    submitRemoveFavoriteBeer({ commit }, beerId) {
        commit('removeFavoriteBeer', beerId);
    }
};
