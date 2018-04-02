import favoritesService from '../services/favoritesService';

export const actions = {
    loadFavoriteBeers({ commit }, requestParams) {
        favoritesService.fetchBeers(requestParams).then((beers) => {
            commit('setFavoriteBeers', beers);
        });
    }
};

