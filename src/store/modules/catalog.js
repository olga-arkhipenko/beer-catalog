import ajaxHelper from 'Ajax/ajaxHelper';
import localStorage from 'LocalStorage/localStorage';

export default {
    namespaced: true,
    state: {
        beers: [],
        favoriteBeerIds: [],
        isLoading: false
    },
    mutations: {
        pushBeers(state, beers) {
            state.beers.push(...beers);
        },
        resetBeers(state) {
            state.beers = [];
        },
        setLoading(state) {
            state.isLoading = true;
        },
        resetLoading(state) {
            state.isLoading = false;
        },
        setFavoriteBeerIds(state, favoriteBeerIds) {
            state.favoriteBeerIds = favoriteBeerIds;
        },
        addFavoriteBeerId(state, favoriteBeerId) {
            state.favoriteBeerIds.push(favoriteBeerId);
        }
    },
    actions: {
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

}