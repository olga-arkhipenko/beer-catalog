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
        favorites: []
    },
    getters: {
        getBeersForCatalog(state) {
            return state.beers.map(beer => ({
                id: beer.id, 
                name: beer.name, 
                image: beer.image_url, 
                tagline: beer.tagline
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
            state.favorites.push(favoriteBeerId);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        SET_FETCHED(state) {
            state.isFetched = true;
        },
        RESET_FECTHED(state) {
            state.isFetched = false;
        }
    },
    actions: {
        getBeerPage({commit, state}) {
            if(!state.isFetched) {
                // state.isLoading = true;
                // console.log('isLoading '+state.isLoading);
                const url = UrlCreator.create({...state.catalogParams, ...state.searchParams});
                api.get(url).then(beers => {
                    if(JSON.parse(beers).length === 0) {
                        commit('SET_FETCHED');
                        return;
                    }
                    else {
                        commit('SET_BEERS', beers);
                        // state.isLoading = false;
                        // console.log('isLoading '+state.isLoading);
                    }
                });
            }
        }
    }
})