import PunkAPI from '../../api/PunkAPI';
import LocalStorageAPI from '../../api/LocalStorageAPI';
import UrlCreator from '../../api/utilities/UrlCreator';

export default {
    state: {
        beers: [],
        favoriteBeers: [],
        favoriteBeerIds: [],
        urlParams: {},
        isFetched: false,
        isLoading: false
    },
    getters: {
        getFavoriteBeersInfo(state) {
            return state.favoriteBeers.map(beer => ({
                id: beer.id, 
                name: beer.name, 
                image: beer.image_url, 
                tagLine: beer.tagline,
                description: beer.description
                }));
        }
    },
    mutations: {
        SET_FAVORITE_BEERS(state, favoriteBeers) {
            state.favoriteBeers = favoriteBeers;
        },
        RESET_FAVORITE_BEERS(state) {
            state.favoriteBeers = [];
        },
        ADD_URL_PARAMS(state, urlParams) {
            state.urlParams = {...state.urlParams, ...urlParams};
        },
        RESET_URL_PARAMS(state) {
            state.urlParams = {};
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
        fetchFavoriteBeers({commit, state}) {
            // commit('SET_LOADING');
            // const url = UrlCreator.create(state.urlParams);
            // PunkAPI.get(url).then(beers => {
            //     commit('RESET_LOADING');
            //     if(beers.length < state.urlParams.per_page) {
            //         commit('SET_FAVORITE_BEERS', beers);
            //         commit('SET_FETCHED');
            //     }
            //     else {
            //         commit('SET_FAVORITE_BEERS', beers);
            //     }
            // });
        },
        fetchFavoriteBeerIds({commit, state}) {
            const favoriteBeerIds = LocalStorageAPI.fetchFavoriteBeerIds();
            commit('SET_FAVORITE_BEER_IDS', favoriteBeerIds);
        },
        addFavoriteBeerId({commit, state}, favoriteBeerId) {
            if(state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
                commit('ADD_FAVORITE_BEER_ID', favoriteBeerId);
            }
            LocalStorageAPI.updateFavoriteBeerIds(state.favoriteBeerIds);
        },
        removeFavoriteBeer({commit, state}, favoriteBeerId) {
            const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
            commit('SET_FAVORITE_BEER_IDS', filteredIds);
            LocalStorageAPI.updateFavoriteBeerIds(state.favoriteBeerIds);
        }
    }
}