import Vue from 'vue';
import Vuex from 'vuex';
import PunkAPI from '../api/PunkAPI';
import LocalStorageAPI from '../api/LocalStorageAPI';
import UrlCreator from '../api/utilities/UrlCreator';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
        foundBeers: [],
        isFetched: false,
        isLoading: false,
        favoriteBeerIds: []
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
        //     return state.beers.map(beer => ({
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
            state.favoriteBeerIds = [];
            state.favoriteBeerIds.push(...favoriteBeerIds);
        },
        ADD_FAVORITE_BEER_ID(state, favoriteBeerId) {
            state.favoriteBeerIds.push(favoriteBeerId);
        }
    },
    actions: {
        fetchBeerPage({commit, state}, urlParams) {
            if(!state.isFetched) {
                commit('SET_LOADING');
                const url = UrlCreator.create(urlParams);
                PunkAPI.get(url).then(beers => {
                    const parsedBeers = JSON.parse(beers);
                    commit('RESET_LOADING');
                    if(parsedBeers.length === 0) {
                        commit('SET_FETCHED');
                        return;
                    }
                    else {
                        commit('SET_BEERS', parsedBeers);
                    }
                });
            } 
        },
        fetchFavoriteBeers({commit, state}) {
            commit('SET_FAVORITE_BEER_IDS', LocalStorageAPI.fetchFavoriteBeerIds());
        },
        addFavoriteBeerId({commit, state}, favoriteBeerId) {
            if(state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
                commit('ADD_FAVORITE_BEER_ID', favoriteBeerId);
            }
            LocalStorageAPI.updateFavoriteBeerIds(state.favoriteBeerIds);
        },
        removeFavoriteBeerId({commit, state}, favoriteBeerId) {
            const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
            commit('SET_FAVORITE_BEER_IDS', filteredIds);
            LocalStorageAPI.updateFavoriteBeerIds(state.favoriteBeerIds);
        }
    }
})