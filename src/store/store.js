import Vue from 'vue';
import Vuex from 'vuex';
import PunkAPI from '../api/PunkAPI'
import UrlCreator from '../api/utilities/UrlCreator'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
        foundBeers: [],
        isFetched: false,
        isLoading: false,
        // favoriteBeers: []
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
        // INCREMENT_CATALOG_PAGE(state) {
        //     state.catalogParams.page++;
        // },
        // RESET_CATALOG_PAGE(state) {
        //     state.catalogParams.page = 1;
        // },
        // SET_SEARCH_PARAMS(state, searchParams) {
        //     state.searchParams = {...state.searchParams,...searchParams};
        // },
        // RESET_SEARCH_PARAMS(state) {
        //     state.searchParams = {};
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
        // SET_FAVORITE_BEERS(state, favoriteBeers) {
        //     state.favoriteBeers.push(favoriteBeers);
        //     console.log('favorits' + state.favoriteBeers);
        // }
    },
    actions: {
        fetchBeerPage({commit, state}, urlParams) {
            if(!state.isFetched) {
                commit('SET_LOADING');
                const url = UrlCreator.create(urlParams);
                console.log(url)
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
        // fetchFavoriteBeers({commit, state}) {
        //     const favoriteBeers = JSON.parse(window.localStorage.getItem('favoriteBeers'));
        //     console.log(favoriteBeers);
        //     if(favoriteBeers) {
        //         commit('SET_FAVORITE_BEERS', favoriteBeers);
        //     }
        // },
        // addFavoriteBeer({commit, state}, favoriteBeer) {
        //     if(state.favoriteBeers.every(beer => beer.id !== favoriteBeer.id)) {
        //         console.log('favorite add  ' + JSON.stringify(favoriteBeer))
        //         commit('SET_FAVORITE_BEERS', favoriteBeer);
        //         console.log('favorite add ' + JSON.stringify(state.favoriteBeers))
        //         window.localStorage.setItem('favoriteBeers', JSON.stringify(state.favoriteBeers));
                
        //     }
        // },
        // removeFavoriteBeer({commit, state}, favoriteBeer) {
        //     state.favoriteBeers = state.favoriteBeers.filter(beer => beer.id !== favoriteBeer.id);
        //     window.localStorage.setItem('favoriteBeers', JSON.stringify(state.favoriteBeers));
        // }
    }
})