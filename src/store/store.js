import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/api.js'

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
        SET_BEERS(state, beers){
            state.beers.push(...beers);
        },
        INCREMET_CATALOG_PAGE_NUMBER(state){
            this.catalogPageNumber++;
        }
    },
    actions: {
        getBeerPage({commit}, page, perPage) {
            api.get(page, perPage).then(beers => commit('SET_BEERS', JSON.parse(beers)));
        }
    }
})