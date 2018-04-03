import favoritesService from '../services/favoritesService';

export default {
    loadFavoriteBeers({ commit }, requestParams) {
        favoritesService.fetchBeers(requestParams).then((beers) => {
            commit('setFavoriteBeers', beers);
        });
    },
    removeFavoriteBeer({ dispatch }, payload) {
        dispatch('favoritesManagement/removeFavoriteBeer', payload.id).then((beerIds) => {
            const allParams = { ...payload.requestParams, beerIds };
            dispatch('loadFavoriteBeers', allParams);
        });
    }
};

