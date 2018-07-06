import beerService from 'catalogModule/services/beerService';
import mutationTypes from 'catalogModule/store/mutations/constants';
import actionTypes from './constants';

export default {
    [actionTypes.LOAD_BEERS]({ commit }, beerParams) {
        return beerService
            .fetchBeers(beerParams)
            .then((beers) => {
                commit(mutationTypes.PUSH_BEERS, beers);
            });
    },
    [actionTypes.RESET_BEERS]({ commit }) {
        commit(mutationTypes.RESET_BEERS);
    },
    [actionTypes.ADD_FAVORITE_BEER]({ commit, dispatch }, beerId) {
        return dispatch('favorites/addFavoriteBeer', beerId, { root: true })
            .then(favoriteBeerId => commit(mutationTypes.MAKE_FAVORITE_BEER, favoriteBeerId));
    },
    [actionTypes.REMOVE_FAVORITE_BEER]({ commit, dispatch }, beerId) {
        return dispatch('favorites/removeFavoriteBeer', beerId, { root: true })
            .then((unfavoriteBeerId) => {
                commit(mutationTypes.UNMAKE_BEER_FAVORITE, unfavoriteBeerId);
            });
    }
};

