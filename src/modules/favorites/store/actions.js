import ajaxHelper from 'Ajax/ajaxHelper';

export const actions = {
    loadFavoriteBeers({commit, state, dispatch}, requestParams) {
        ajaxHelper.fetchFavoritesData(requestParams).then(beers => {
            commit('setFavoriteBeers', beers);
        });
    }
}