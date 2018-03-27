<template>
    <article class="catalog">
        <search-panel
        :searchParams="searchParams"
        @loadBeerPage="loadBeerPage"
        @resetPage="resetPage"
        />
        <grid-list
        :beers="beers"

        />
        <!-- <catalog-spinner v-if="isLoading"/> -->
    </article>
</template>

<script>
import SearchPanel from '../search/SearchPanel';
import GridList from '../lists/GridList';
import Spinner from '../utilities/Spinner';
import windowUtils from '../../utils/windowUtils';
import {mapState, mapActions} from 'vuex';

export default {
    data() {
        return {
            catalogParams: {
                pageNumber: 1,
                itemsPerPage: 9
            },
            searchParams: {}
        }
    },
    components: {
        'search-panel': SearchPanel,
        'grid-list': GridList,
        'catalog-spinner': Spinner
    },
    mounted() {
        window.addEventListener('scroll', this.loadNextBeerPage);
        this.loadBeerPage(this.catalogParams, this.searchParams);
        // this.$store.dispatch('fetchFavoriteBeerIds');
        // this.loadBeers();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.loadNextBeerPage);
        // this.$store.commit('RESET_BEERS');
        // this.$store.commit('RESET_FECTHED');
        // this.$store.commit('RESET_URL_PARAMS');
        // this.resetPage();
    },
    computed: mapState('catalog', ['beers']),
        // beers() {
        //     return this.beers;
        // },
        // isLoading() {
        //     return this.$store.state.isLoading;
        // },
        // favoriteBeerIds() {
        //     return this.$store.state.favoriteBeerIds; // from another place
        // }
    methods: {
        ...mapActions('catalog', ['loadBeerPage']),

        loadBeerPage(catalogParams, searchParams) {
            const payload = {...catalogParams, ...searchParams};
            loadBeerPage(payload);
        },
        loadNextBeerPage() {
            if(windowUtils.isBottom()) {
                this.incrementPage();
                this.loadBeerPage(this.catalogParams, this.searchParams);
            }
        },
        incrementPage() {
            this.catalogParam.pageNumber++;
        },
        resetPage() {
            this.catalogParam.pageNumber = 1;
        },
        // addFavoriteBeerId(favoriteBeerId) {
        //     this.$store.dispatch('addFavoriteBeerId', favoriteBeerId)
        // },
        // removeFavoriteBeer(favoriteBeerId) {
        //     this.$store.dispatch('removeFavoriteBeer', favoriteBeerId)
        // }
    }
}
</script>

<style>
    .catalog {
        margin: 150px 0 0;
    }
</style>

