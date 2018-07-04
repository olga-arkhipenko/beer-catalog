import beerService from 'catalogModule/services/beerService';

export default {
    loadBeers({ commit }, beerParams) {
        return beerService
            .fetchBeers(beerParams)
            .then((beers) => {
                commit('pushBeers', beers);
            });
    },
    resetBeers({ commit }) {
        commit('resetBeers');
    },
    addFavoriteBeer({ commit, dispatch }, beerId) {
        return dispatch('favorites/addFavoriteBeer', beerId, { root: true })
            .then(favoriteBeerId => commit('makeBeerFavorite', favoriteBeerId));
    },
    removeFavoriteBeer({ commit, dispatch }, beerId) {
        return dispatch('favorites/removeFavoriteBeer', beerId, { root: true })
            .then((unfavoriteBeerId) => {
                commit('unmakeBeerFavorite', unfavoriteBeerId);
            });
    }
};

