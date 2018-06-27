import favoritesService from 'favoritesModule/services/favoritesService';
import { setFavoriteBeers, setAmountOfPages, resetBeers } from '../mutations/constants';

export default {
    loadFavoriteBeers({ commit }, pageParams) {
        favoritesService
            .fetchFavoriteBeers(pageParams)
            .then((favoritesData) => {
                commit(setFavoriteBeers, favoritesData.beers);
                commit(setAmountOfPages, favoritesData.amountOfPages);
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
        commit(resetBeers);
    }
};

