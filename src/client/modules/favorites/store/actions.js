import beerService from 'common/services/beerService';

export default {
    loadFavoriteBeers({ commit, dispatch }, pageParams) {
        dispatch('favoritesManagement/loadFavoriteBeerIds').then((favoriteBeerIds) => {
            beerService
                .fetchBeers({ ...pageParams, beerIds: favoriteBeerIds })
                .then(beers => commit('setFavoriteBeers', beers));
        });
    },
    removeFavoriteBeer({ dispatch }, payload) {
        dispatch('favoritesManagement/removeFavoriteBeer', payload.id).then((beerIds) => {
            const allParams = { ...payload.requestParams, beerIds };
            dispatch('loadFavoriteBeers', allParams);
        });
    }
};

