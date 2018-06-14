import favoritesService from '../services/favoritesService';

export default {
    loadFavoriteBeers({ commit }, pageParams) {
        favoritesService
            .fetchFavoriteBeers(pageParams)
            .then(beers => commit('setFavoriteBeers', beers));
    },
    addFavoriteBeer(_, beerId) {
        return favoritesService.addFavoriteBeer(beerId);
    },
    removeFavoriteBeer(_, beerId) {
        return favoritesService.removeFavoriteBeer(beerId);
    }
};

