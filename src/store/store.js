import Vue from 'vue';
import Vuex from 'vuex';
import api from '/Users/arkhipenko.o/Documents/dev/js/iTechArt/beer-catalog/src/api/api.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
        beersPerPage: 9
    },
    getters: {
        getBeersForCatalog(state) {
            return state.beers.map(beer => ({id: beer.id, name: beer.name, image: beer.image_url, tagline: beer.tagline}));
        }
    },
    mutations: {
        SET_BEERS(state, beers){
            state.beers.push(...beers);
        }
    },
    actions: {
        getBeerPage({commit}, page, perPage) {
            api.get(page, perPage).then(beers => commit('SET_BEERS', JSON.parse(beers)));
        }
    }
})