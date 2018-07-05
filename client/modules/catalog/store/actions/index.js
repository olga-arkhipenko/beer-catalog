import beerService from 'catalogModule/services/beerService';
import mutationTypes from 'catalogModule/store/mutations/constants';

export default {
    loadBeers({ commit }, beerParams) {
        return beerService
            .fetchBeers(beerParams)
            .then((beers) => {
                commit(mutationTypes.PUSH_BEERS, beers);
            });
    },
    resetBeers({ commit }) {
        commit(mutationTypes.RESET_BEERS);
    },
    addFavoriteBeer({ commit, dispatch }, beerId) {
        return dispatch('favorites/addFavoriteBeer', beerId, { root: true })
            .then(favoriteBeerId => commit(mutationTypes.MAKE_FAVORITE_BEER, favoriteBeerId));
    },
    removeFavoriteBeer({ commit, dispatch }, beerId) {
        return dispatch('favorites/removeFavoriteBeer', beerId, { root: true })
            .then((unfavoriteBeerId) => {
                commit(mutationTypes.UNMAKE_BEER_FAVORITE, unfavoriteBeerId);
            });
    }
};

