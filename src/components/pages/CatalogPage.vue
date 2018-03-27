<template>
    <article class="catalog">
        <search-panel
        ref="searchPanel"
        @loadBeerPage="loadBeerPage"
        @resetPage="resetPage"
        />
        <grid-list
            :beers="beers"
            :favoriteBeerIds="favoriteBeerIds"
        />
        <catalog-spinner v-if="isLoading"/>
    </article>
</template>

<script>
import SearchPanel from '../search/SearchPanel';
import GridList from '../lists/GridList';
import Spinner from '../utilities/Spinner';
import windowUtils from '../../utilities/windowUtils'

export default {
    data() {
        return {
            pageNumber: 1,
            itemsPerPage: 9
        }
    },
    components: {
        'search-panel': SearchPanel,
        'grid-list': GridList,
        'catalog-spinner': Spinner
    },
    mounted() {
        window.addEventListener('scroll', this.loadNextBeerPage);
        this.loadBeerPage(this.pageNumber, this.itemsPerPage);
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
    computed: {
        beers() {
            return this.$store.state.catalog.beers;
        },
        // isLoading() {
        //     return this.$store.state.isLoading;
        // },
        // favoriteBeerIds() {
        //     return this.$store.state.favoriteBeerIds; // from another place
        // }
    },
    methods: {
        loadBeerPage(...params) {
            // this.$store.commit('ADD_URL_PARAMS', this.catalogParams);
            //Придется или из через ref, или что-то пустое передавать. или хз 
            this.$store.dispatch('loadBeerPage', params);
        },
        loadNextBeerPage() {
            if(windowUtils.isBottom()) {
                this.incrementPage();
                //Брать рефы здесь
                this.loadBeerPage(this.pageNumber, this.itemsPerPage);
            }
        },
        incrementPage() {
            this.pageNumber++;
        },
        resetPage() {
            this.pageNumber = 1;
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

