import favoritesService from '../services/favoritesService';

export default {
    loadFavoriteBeers({ commit }, requestParams) {
        favoritesService.fetchBeers(requestParams).then((beers) => {
            commit('setFavoriteBeers', beers);
        });
    },
    removeFavoriteBeer(context, payload) {
        context.dispatch('favoritesManagement/removeFavoriteBeer', payload.id);
        context.dispatch('loadFavoriteBeers', payload.requestParams);
    }
};

