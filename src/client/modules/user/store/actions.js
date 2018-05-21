import userService from 'user/services/userService';

export default {
    submitRegistartion({ commit, state }, registrationData) {
        commit('setRegistrationData', registrationData);
        userService
            .register(state.registrationData)
            .then((userData) => {
                console.log(JSON.stringify(userData));
                commit('setUserData', userData);
            });
    },
    resetUserInfo({ commit }) {
        commit('resetUserData');
        commit('resetRegistrationData');
    }
};
