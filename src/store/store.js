import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/api'
import UrlCreator from '../api/utilities/UrlCreator'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
        beersPerPage: 9,
        catalogPageNumber: 1
    },
    getters: {
        getBeersForCatalog(state) {
            return state.beers.map(beer => ({id: beer.id, name: beer.name, image: beer.image_url, tagline: beer.tagline}));
        }
    },
    mutations: {
        SET_CATALOG_BEERS(state, beers) {
            state.beers.push(...JSON.parse(beers));
        },
        SET_FOUND_BEERS(state, foundBeers) {
            state.beers.push(...JSON.parse(foundBeers));
        },
        CLEAN_BEERS(state){
            state.beers = [];
        },
        INCREMET_CATALOG_PAGE_NUMBER(state) {
            state.catalogPageNumber++;
        },
        RESET_CATALOG_PAGE_NUMBER(state) {
            state.catalogPageNumber = 1;
        }
    },
    actions: {
        getBeerPage({commit, state}, payload) {
            const url = UrlCreator.create({page: payload.page, per_page: state.beersPerPage});
            console.log(url);
            api.get(url).then(beers => commit('SET_CATALOG_BEERS', beers));
        },
        getFoundBeers({commit, state}, beerName) {
            const url = UrlCreator.create({beer_name: beerName});
            console.log(url);
            api.get(url).then(foundBeers => {
                commit('CLEAN_BEERS');
                commit('SET_FOUND_BEERS', foundBeers);
            });
        }
    }
})