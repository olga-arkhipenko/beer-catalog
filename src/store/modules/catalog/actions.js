import ajaxHelper from 'Ajax/ajaxHelper';
import localStorage from 'LocalStorage/localStorage';

export const actions = {
    loadBeers({commit, state}, requestParams) {
        commit('setLoading');
        ajaxHelper.fetchCatalogData(requestParams).then(beers => {
            commit('pushBeers', beers);
            commit('resetLoading');
        });
    },
    openCatalogPage({commit, dispatch}, catalogParams) {
        dispatch('loadBeers', catalogParams);
        dispatch('loadFavoriteBeerIds');
    },
    loadFavoriteBeerIds({commit, state}) {
        const favoriteBeerIds = localStorage.fetchFavoriteBeerIds();
        commit('setFavoriteBeerIds', favoriteBeerIds);
    },
    resetStore({commit, state}) {
        commit('resetBeers');
    },
    addFavoriteBeer({commit, state}, favoriteBeerId) {
        if(state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
            commit('addFavoriteBeerId', favoriteBeerId);
        }
        localStorage.updateFavoriteBeerIds(state.favoriteBeerIds);
    },
    removeFavoriteBeer({commit, state}, favoriteBeerId) {
        const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
        commit('setFavoriteBeerIds', filteredIds);
        localStorage.updateFavoriteBeerIds(state.favoriteBeerIds);
    }
}