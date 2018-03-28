import ajaxHelper from 'Ajax/ajaxHelper';
import localStorage from 'LocalStorage/localStorage';

export const actions = {
    loadFavoriteBeers({commit, state, dispatch}, requestParams) {
        dispatch('fetchFavoriteBeerIds');
        const allRequestParams = {beerIds: state.favoriteBeerIds, ...requestParams}
        ajaxHelper.fetchFavoritesData(allRequestParams).then(beers => {
            commit('setFavoriteBeers', beers);
        });
    },
    fetchFavoriteBeerIds({commit, state}) {
        const favoriteBeerIds = localStorage.fetchFavoriteBeerIds();
        commit('setFavoriteBeerIds', favoriteBeerIds);
    },
    removeFavoriteBeer({commit, state}, favoriteBeerId) {
        const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
        commit('setFavoriteBeerIds', filteredIds);
        localStorage.updateFavoriteBeerIds(state.favoriteBeerIds);
    }
}