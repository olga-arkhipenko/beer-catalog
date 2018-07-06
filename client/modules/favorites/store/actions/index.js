import favoritesService from 'favoritesModule/services/favoritesService';
import mutationTypes from 'favoritesModule/store/mutations/constants';
import actionTypes from './constants';

export default {
    [actionTypes.LOAD_FAVORITE_BEERS]({ commit }, pageParams) {
        return favoritesService
            .fetchFavoriteBeers(pageParams)
            .then((favoritesData) => {
                commit(mutationTypes.SET_FAVORITE_BEERS, favoritesData.beers);
                commit(mutationTypes.SET_AMOUNT_OF_PAGES, favoritesData.amountOfPages);
            });
    },
    [actionTypes.ADD_FAVORITE_BEER](_, beerId) {
        return favoritesService.addFavoriteBeer(beerId);
    },
    [actionTypes.REMOVE_FAVORITE_BEER](_, beerId) {
        return favoritesService.removeFavoriteBeer(beerId);
    },
    [actionTypes.REMOVE_FAVORITE_BEER_WITH_RELOAD]({ dispatch }, payload) {
        return favoritesService
            .removeFavoriteBeer(payload.beerId)
            .then(() => dispatch(actionTypes.REMOVE_FAVORITE_BEER, payload.requestParams));
    },
    [actionTypes.RESET_BEERS]({ commit }) {
        commit(mutationTypes.RESET_BEERS);
    }
};

