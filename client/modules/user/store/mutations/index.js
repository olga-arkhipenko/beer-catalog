import mutationTypes from './constants';

export default {
    [mutationTypes.SET_USER_DATA](state, userData) {
        state.name = userData.name;
        state.profilePictureUrl = userData.profilePictureUrl;
    },
    [mutationTypes.RESET_USER_DATA](state) {
        state.name = '';
        state.profilePictureUrl = null;
    }
};
