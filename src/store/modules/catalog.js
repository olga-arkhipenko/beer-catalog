import ajaxHelper from '../../ajax/ajaxHelper';
import localStorage from '../../localStorage/localStorage';

export default {
    namespaced: true,
    state: {
        beers: [],
        favoriteBeerIds: [],
        isAllFetched: false,
        // isLoading: false
    },
    mutations: {
        setBeers(state, beers) {
            state.beers.push(...beers);
        },
        resetBeers(state) {
            state.beers = [];
        },
        // setAllFetched(state) {
        //     state.isAllFetched = true;
        // },
        // resetAllFetched(state) {
        //     state.isAllFetched = false;
        // },
        // setLoading(state) {
        //     state.isLoading = true;
        // },
        // resetLoading(state) {
        //     state.isLoading = false;
        // },
        setFavoriteBeerIds(state, favoriteBeerIds) {
            state.favoriteBeerIds = favoriteBeerIds;
        },
        addFavoriteBeerId(state, favoriteBeerId) {
            state.favoriteBeerIds.push(favoriteBeerId);
        }
    },
    actions: {
        loadBeers({commit, state}, requestParams) {
            console.log('hello'+ requestParams);
            const beers = ajaxHelper.fetchCatalogData(requestParams);
            commit('setBeers', beers);
        },
        openCatalogPage({commit, state}, catalogParams) {
            this.loadBeers(catalogParams);
            this.loadFavoriteBeerIds();
        },
        loadFavoriteBeerIds({commit, state}) {
            const favoriteBeerIds = localStorage.fetchFavoriteBeerIds();
            commit('setFavoriteBeerIds', favoriteBeerIds);
        },
        // resetStore({commit, state}) {
        //     commit('resetBeers');
        //     // commit('resetAllFetched');
        // },
        // addFavoriteBeerId({commit, state}, favoriteBeerId) {
        //     if(state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
        //         commit('ADD_FAVORITE_BEER_ID', favoriteBeerId);
        //     }
        //     LocalStorageAPI.updateFavoriteBeerIds(state.favoriteBeerIds);
        // },
        // removeFavoriteBeer({commit, state}, favoriteBeerId) {
        //     const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
        //     commit('SET_FAVORITE_BEER_IDS', filteredIds);
        //     LocalStorageAPI.updateFavoriteBeerIds(state.favoriteBeerIds);
        // }
    }

}