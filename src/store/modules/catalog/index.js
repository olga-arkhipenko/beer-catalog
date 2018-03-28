import {mutations} from './mutations';
import {actions} from './actions';

export default {
    namespaced: true,
    state: {
        beers: [],
        favoriteBeerIds: [],
        isLoading: false
    },
    mutations,
    actions,
}