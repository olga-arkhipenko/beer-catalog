import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/api'
import UrlCreator from '../api/utilities/UrlCreator'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
        urlParams: {
            page: 1,
            per_page: 9,
        },
        searchParams: {}
    },
    getters: {
        getBeersForCatalog(state) {
            return state.beers.map(beer => ({id: beer.id, name: beer.name, image: beer.image_url, tagline: beer.tagline}));
        }
    },
    mutations: {
        SET_BEERS(state, beers) {
            state.beers.push(...JSON.parse(beers));
        },
        RESET_BEERS(state) {
            state.beers = [];
        },
        INCREMENT_CATALOG_PAGE(state) {
            state.urlParams.page++;
        },
        RESET_CATALOG_PAGE(state) {
            state.urlParams.page = 1;
        },
        SET_SEARCH_PARAMS(state, searchParams) {
            state.searchParams = {...searchParams};
        }
    },
    actions: {
        getBeerPage({commit, state}) {
            const url = UrlCreator.create({...state.urlParams, ...state.searchParams});
            console.log(url);
            api.get(url).then(beers => commit('SET_BEERS', beers));
        },
        // getFoundBeers({commit, state}, beerName) {
        //     const url = UrlCreator.create({beer_name: beerName});
        //     console.log(url);
        //     api.get(url).then(foundBeers => {
        //         commit('CLEAN_BEERS');
        //         commit('SET_FOUND_BEERS', foundBeers);
        //     });
        // }
    }
})