import ajaxHelper from 'Ajax/ajaxHelper';

export const actions = {
    loadBeers({commit, state}, requestParams) {
        commit('setLoading');
        ajaxHelper.fetchCatalogData(requestParams).then(beers => {
            commit('pushBeers', beers);
            commit('resetLoading');
        });
    },
    resetStore({commit, state}) {
        commit('resetBeers');
    }
}