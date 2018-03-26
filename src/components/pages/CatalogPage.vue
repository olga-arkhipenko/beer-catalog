<template>
    <article class="catalog">
        <search-panel
        ref="searchPanel"
        @loadBeers="loadBeers"
        @resetPage="resetPage"
        />
        <!-- <section class="catalog">
            <beer-card 
                v-for="beer in beers"
                :favoriteBeerIds="favoriteBeerIds"
                :beer="beer"
                :key="beer.id"
                @addFavoriteBeerId="addFavoriteBeerId"
                @removeFavoriteBeer="removeFavoriteBeer"
            />
        </section> -->
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
            return this.$store.catalog.state.beers; //HERE
        },
        isLoading() {
            return this.$store.state.isLoading;
        },
        favoriteBeerIds() {
            return this.$store.state.favoriteBeerIds; // from another place
        }
    },
    methods: {
        loadBeers() {
            // this.$store.commit('ADD_URL_PARAMS', this.catalogParams);
            this.$store.dispatch('fetchBeers');
        },
        loadNextBeerPage() {
            if(this.isBottom()) {
                this.incrementPage();
                this.loadBeers();
            }
        },
        incrementPage() {
            this.catalogParams.page++;
        },
        resetPage() {
            this.catalogParams.page = 1;
        },
        isBottom(){
            const scrollY = window.scrollY;
            const visibleContent = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const pageBottom = visibleContent + scrollY >= pageHeight;
            return pageBottom || pageHeight < visibleContent;
        },
        addFavoriteBeerId(favoriteBeerId) {
            this.$store.dispatch('addFavoriteBeerId', favoriteBeerId)
        },
        removeFavoriteBeer(favoriteBeerId) {
            this.$store.dispatch('removeFavoriteBeer', favoriteBeerId)
        }
    }
}
</script>

<style>
    .catalog {
        margin: 150px 0 0;
    }
</style>

