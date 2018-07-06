import beerService from 'catalogModule/services/beerService';
import mutationTypes from 'catalogModule/store/mutations/constants';
import favoritesActionTypes from 'favoritesModule/store/actions/constants';
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
        return dispatch(favoritesActionTypes.ADD_FAVORITE_BEER, beerId)
            .then(favoriteBeerId => commit(mutationTypes.MAKE_BEER_FAVORITE, favoriteBeerId));
    },
    [actionTypes.REMOVE_FAVORITE_BEER]({ commit, dispatch }, beerId) {
        return dispatch(favoritesActionTypes.REMOVE_FAVORITE_BEER, beerId)
            .then(unfavoriteBeerId => commit(mutationTypes.UNMAKE_BEER_FAVORITE, unfavoriteBeerId));
    }
};

