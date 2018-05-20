import userService from 'user/services/userService';

export default {
    submitRegistartion({ commit, state }, userData) {
        commit('setUserData', userData);
        userService
            .register(state.userData)
            .then(() => {
                commit('setUserRegistered');
            });
    }
};
