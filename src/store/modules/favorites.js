import ajaxHelper from '../../ajax/ajaxHelper';
import localStorage from '../../localStorage/localStorage';

export default {
    namespaced: true,
    state: {
        favoriteBeers: [],
        favoriteBeerIds: []
    },
    mutations: {
        setFavoriteBeers(state, favoriteBeers) {
            state.favoriteBeers = favoriteBeers;
        },
        setFavoriteBeerIds(state, favoriteBeerIds) {
            state.favoriteBeerIds = favoriteBeerIds;
        }
    },
    actions: {
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
}