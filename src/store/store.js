import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/api'
import UrlCreator from '../api/utilities/UrlCreator'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
        isFetched: false,
        isLoading: false,
        catalogParams: {
            page: 1,
            per_page: 9,
        },
        searchParams: {},
        favoriteBeersIds: []
    },
    getters: {
        getFormattedBeers(state) {
            return state.beers.map(beer => ({
                id: beer.id, 
                name: beer.name, 
                image: beer.image_url, 
                tagLine: beer.tagline,
                description: beer.description
            }));
        }
    },
    mutations: {
        SET_BEERS(state, beers) {
            console.log(state.beers)
            state.beers.push(...JSON.parse(beers));
        },
        RESET_BEERS(state) {
            state.beers = [];
        },
        INCREMENT_CATALOG_PAGE(state) {
            state.catalogParams.page++;
        },
        RESET_CATALOG_PAGE(state) {
            state.catalogParams.page = 1;
        },
        SET_SEARCH_PARAMS(state, searchParams) {
            state.searchParams = {...state.searchParams,...searchParams};
        },
        RESET_SEARCH_PARAMS(state) {
            state.searchParams = {};
        },
        ADD_FAVORITE(state, favoriteBeerId) {
            let localStoredData = JSON.parse(window.localStorage.getItem('favoriteBeers'));
            if(!localStoredData) {
                localStoredData = [];
            }
            localStoredData.push(favoriteBeerId);
            window.localStorage.setItem('favoriteBeers', JSON.stringify(localStoredData));
        },
        // REMOVE_FAVORITE(state, favoriteBeerId) {

        // },
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
        }
    },
    actions: {
        getBeerPage({commit, state}) {
            if(!state.isFetched) {
                commit('SET_LOADING');
                const url = UrlCreator.create({...state.catalogParams, ...state.searchParams});
                api.get(url).then(beers => {
                    if(JSON.parse(beers).length === 0) {
                        commit('RESET_LOADING');
                        commit('SET_FETCHED');
                        return;
                    }
                    else {
                        commit('RESET_LOADING');
                        commit('SET_BEERS', beers);
                    }
                });
            }
        }
    }
})