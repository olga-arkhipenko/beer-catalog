import PunkAPI from '../../api/PunkAPI';
import LocalStorageAPI from '../../api/LocalStorageAPI';
import UrlCreator from '../../api/utilities/UrlCreator';

export default {
    state: {
        beers: [],
        favoriteBeerIds: [],
        // urlParams: {},
        // isFetched: false,
        // isLoading: false
    },
    getters: {
        getCatalogBeersInfo(state) {
            return state.beers.map(beer => ({
                id: beer.id, 
                name: beer.name, 
                image: beer.image_url, 
                tagLine: beer.tagline
                }));
        }
    },
    mutations: {
        setBeers(state, beers) {
            state.beers.push(...beers);
        },
        resetBeers(state) {
            state.beers = [];
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
        fetchBeers({commit, state}) {
            if(!state.isFetched) {
                commit('SET_LOADING');
                const url = UrlCreator.create(state.urlParams);
                PunkAPI.get(url).then(beers => {
                    commit('RESET_LOADING');
                    if(beers.length < state.urlParams.per_page) {
                        commit('setBeers', beers);
                        commit('SET_FETCHED');
                    }
                    else {
                        commit('setBeers', beers);
                    }
                });
            }
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