import favoritesService from '../services/favoritesService';

export const actions = {
    loadFavoriteBeers({ commit }, requestParams) {
        favoritesService.fetchBeers(requestParams).then((beers) => {
            commit('setFavoriteBeers', beers);
        });
    },
    removeFavoriteBeer(context, favoriteBeerId) {
        context.dispatch('favoritesManagement/removeFavoriteBeer', favoriteBeerId);
        context.dispatch('loadFavoriteBeers');
    }
};

