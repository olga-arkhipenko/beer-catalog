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
        SET_BEERS(state, beers) {
            state.beers.push(...JSON.parse(beers));
        },
        INCREMET_CATALOG_PAGE_NUMBER(state) {
            state.catalogPageNumber++;
        }
    },
    actions: {
        getBeerPage({commit, state}) {
            const url = UrlCreator.create({page: state.catalogPageNumber, per_page: state.beersPerPage});
            api.get(url).then(beers => commit('SET_BEERS', beers));
        },
        getFoundBeers({commit, state}, beerName) {
            const url = UrlCreator.create({beer_name: beerName});
            console.log(url);
            api.get(url).then(foundBeers => commit('SET_BEERS', foundBeers));
        }
    }
})