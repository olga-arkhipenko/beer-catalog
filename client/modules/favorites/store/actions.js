import favoritesService from '../services/favoritesService';

export default {
    loadFavoriteBeers({ commit }, pageParams) {
        favoritesService
            .fetchFavoriteBeers(pageParams)
            .then((favoritesData) => {
                commit('setFavoriteBeers', favoritesData.beers);
                commit('setAmountOfPages', favoritesData.amountOfPages);
            });
    },
    addFavoriteBeer(_, beerId) {
        return favoritesService.addFavoriteBeer(beerId);
    },
    removeFavoriteBeer(_, beerId) {
        return favoritesService.removeFavoriteBeer(beerId);
    }
};

