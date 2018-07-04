import beerDetailsService from 'beerInfoModule/services/beerDetailsService';
import { setBeer, resetBeer, makeBeerFavorite, unmakeBeerFavorite } from '../mutations/constants';

export default {
    loadBeer({ commit }, beerId) {
        return beerDetailsService
            .fetchBeer(beerId)
            .then((beer) => {
                commit(setBeer, beer);
            });
    },
    resetBeer({ commit }) {
        commit(resetBeer);
    },
    addFavoriteBeer({ commit, dispatch }, beerId) {
        dispatch('favorites/addFavoriteBeer', beerId, { root: true })
            .then(() => commit(makeBeerFavorite));
    },
    removeFavoriteBeer({ commit, dispatch }, beerId) {
        dispatch('favorites/removeFavoriteBeer', beerId, { root: true })
            .then(() => commit(unmakeBeerFavorite));
    }
};
