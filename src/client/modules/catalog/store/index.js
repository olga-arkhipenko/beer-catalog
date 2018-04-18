import favoritesManagement from 'favoritesManagement/store/index';
import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        beers: []
    },
    mutations,
    actions,
    modules: {
        favoritesManagement
    }
};

