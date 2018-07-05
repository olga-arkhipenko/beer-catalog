import beerDetailsService from 'beerInfoModule/services/beerDetailsService';
import mutationTypes from 'beerInfoModule/store/mutations/constants';
import actionTypes from './constants';

export default {
    [actionTypes.LOAD_BEER]({ commit }, beerId) {
        return beerDetailsService
            .fetchBeer(beerId)
            .then((beer) => {
                commit(mutationTypes.SET_BEER, beer);
            });
    },
    [actionTypes.RESET_BEER]({ commit }) {
        commit(mutationTypes.RESET_BEER);
    },
    [actionTypes.ADD_FAVORITE_BEER]({ commit, dispatch }, beerId) {
        dispatch('favorites/addFavoriteBeer', beerId, { root: true })
            .then(() => commit(mutationTypes.MAKE_BEER_FAVORITE));
    },
    [actionTypes.REMOVE_FAVORITE_BEER]({ commit, dispatch }, beerId) {
        dispatch('favorites/removeFavoriteBeer', beerId, { root: true })
            .then(() => commit(mutationTypes.UNMAKE_BEER_FAVORITE));
    }
};
