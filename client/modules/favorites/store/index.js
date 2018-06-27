import mutations from './mutations/index';
import actions from './actions/index';

export default {
    namespaced: true,
    state: {
        favoriteBeers: [],
        amountOfPages: 0
    },
    mutations,
    actions
};

