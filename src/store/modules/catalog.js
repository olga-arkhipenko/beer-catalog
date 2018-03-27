// import PunkAPI from '../../api/PunkAPI';
// import LocalStorageAPI from '../../api/LocalStorageAPI';
import ajaxHelper from '../../ajax/ajaxHelper';

export default {
    namespaced: true,
    state: {
        beers: [],
        favoriteBeerIds: [],
        isAllFetched: false,
        isLoading: false
    },
    getters: {
        getCatalogBeersInfo(state) {
            return state.beers.map(beer => ({
                id: beer.id, 
                name: beer.name, 
                image: beer.image_url, 
                tagLine: beer.tagline
                }));
        }
    },
    mutations: {
        setBeers(state, beers) {
            state.beers.push(...beers);
        },
        resetBeers(state) {
            state.beers = [];
        },
        setAllFetched(state) {
            state.isAllFetched = true;
        },
        resetAllFetched(state) {
            state.isAllFetched = false;
        },
        setLoading(state) {
            state.isLoading = true;
        },
        resetLoading(state) {
            state.isLoading = false;
        },
        SET_FAVORITE_BEER_IDS(state, favoriteBeerIds) {
            state.favoriteBeerIds = favoriteBeerIds;
        },
        ADD_FAVORITE_BEER_ID(state, favoriteBeerId) {
            state.favoriteBeerIds.push(favoriteBeerId);
        }
    },
    actions: {
        loadBeerPage({commit, state}, payload) {
            // if(!state.isFetched) {
            //     commit('setLoading');
            console.log(JSON.parse(payload));
                // const url = UrlCreator.create(payload);
                ajaxHelper.fetchData(payload);
                // PunkAPI.get(url).then(beers => {
                    // commit('resetLoading');
                    // if(beers.length < state.urlParams.per_page) {
                        // commit('setBeers', beers);
                        // commit('SET_FETCHED');
                    // }
                    // else {
                        // commit('setBeers', beers);
                    // }
                // });
            // }
        },
        resetStore({commit, state}) {
            commit('resetBeers');
            commit('resetAllFetched');
        }
        // fetchFavoriteBeerIds({commit, state}) {
        //     const favoriteBeerIds = LocalStorageAPI.fetchFavoriteBeerIds();
        //     commit('SET_FAVORITE_BEER_IDS', favoriteBeerIds);
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