import beersService from '../services/beersService';

export default {
    loadBeers({ commit }, beerParams) {
        beersService.fetchBeers(beerParams)
            .then((beers) => {
                commit('pushBeers', beers);
            });
    },
    resetBeers({ commit }) {
        commit('resetBeers');
    },
    addFavoriteBeer({ commit, dispatch }, beerId) {
        dispatch('favorites/addFavoriteBeer', beerId, { root: true })
            .then(favoriteBeerId => commit('makeBeerFavorite', favoriteBeerId));
    },
    removeFavoriteBeer({ commit, dispatch }, beerId) {
        dispatch('favorites/removeFavoriteBeer', beerId, { root: true })
            .then((unfavoriteBeerId) => {
                commit('unmakeBeerFavorite', unfavoriteBeerId);
            });
    }
};

