import favoritesService from 'favoritesModule/services/favoritesService';
import mutationTypes from 'favoritesModule/store/mutations/constants';

export default {
    loadFavoriteBeers({ commit }, pageParams) {
        return favoritesService
            .fetchFavoriteBeers(pageParams)
            .then((favoritesData) => {
                commit(mutationTypes.SET_FAVORITE_BEERS, favoritesData.beers);
                commit(mutationTypes.SET_AMOUNT_OF_PAGES, favoritesData.amountOfPages);
            });
    },
    addFavoriteBeer(_, beerId) {
        return favoritesService.addFavoriteBeer(beerId);
    },
    removeFavoriteBeer(_, beerId) {
        return favoritesService.removeFavoriteBeer(beerId);
    },
    removeFavoriteBeerWithReload({ dispatch }, payload) {
        return favoritesService.removeFavoriteBeer(payload.beerId)
            .then(() => dispatch('loadFavoriteBeers', payload.requestParams));
    },
    resetBeers({ commit }) {
        commit(mutationTypes.RESET_BEERS);
    }
};

