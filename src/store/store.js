import Vue from 'vue';
import Vuex from 'vuex';
import PunkAPI from '../api/PunkAPI';
import LocalStorageAPI from '../api/LocalStorageAPI';
import UrlCreator from '../api/utilities/UrlCreator';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
        urlParams: {},
        isFetched: false,
        isLoading: false,
        favoriteBeerIds: [],
    },
    getters: {
        getCatalogBeersInfo(state) {
            return state.beers.map(beer => ({
                id: beer.id, 
                name: beer.name, 
                image: beer.image_url, 
                tagLine: beer.tagline
            }));
        },
        // getFavoriteBeersInfo(state) {
        //     return state.favoriteBeers.map(beer => ({
        //         id: beer.id, 
        //         name: beer.name, 
        //         image: beer.image_url, 
        //         tagLine: beer.tagline,
        //         description: beer.description
        //     }));
        // }
    },
    mutations: {
        SET_BEERS(state, beers) {
            state.beers.push(...beers);
        },
        RESET_BEERS(state) {
            state.beers = [];
        },
        ADD_URL_PARAMS(state, urlParams) {
            state.urlParams = {...state.urlParams, ...urlParams};
        },
        RESET_URL_PARAMS(state) {
            state.urlParams = [];
        },
        SET_FETCHED(state) {
            state.isFetched = true;
        },
        RESET_FECTHED(state) {
            state.isFetched = false;
        },
        SET_LOADING(state) {
            state.isLoading = true;
        },
        RESET_LOADING(state) {
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
        fetchBeers({commit, state}) {
            if(!state.isFetched && !state.isLoading) {
                commit('SET_LOADING');
                console.log('parararams ' + JSON.stringify(state.urlParams));
                const url = UrlCreator.create(state.urlParams);
                console.log(url)
                PunkAPI.get(url).then(beers => {
                    const parsedBeers = JSON.parse(beers);
                    commit('RESET_LOADING');
                    if(parsedBeers.length < state.urlParams.per_page) {
                        commit('SET_BEERS', parsedBeers);
                        commit('SET_FETCHED');
                    }
                    else {
                        commit('SET_BEERS', parsedBeers);
                    }
                });
            } else return;
        },
        fetchFavoriteBeerIds({commit, state}) {
            const favoriteBeerIds = LocalStorageAPI.fetchFavoriteBeerIds();
            commit('SET_FAVORITE_BEER_IDS', favoriteBeerIds);
        },
        addFavoriteBeerId({commit, state}, favoriteBeerId) {
            if(state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
                commit('ADD_FAVORITE_BEER_ID', favoriteBeerId);
            }
        },
        removeFavoriteBeerId({commit, state}, favoriteBeerId) {
            const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
            commit('SET_FAVORITE_BEER_IDS', filteredIds);
        },
        updateFavoriteBeerIds({commit, state}) {
            LocalStorageAPI.updateFavoriteBeerIds(state.favoriteBeerIds);
        }
    }
})