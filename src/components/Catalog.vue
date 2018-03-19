<template>
    <article class="page-content">
        <search-panel
        ref="searchPanel"
        @loadBeers="loadBeers"
        @resetPage="resetPage"
        />
        <section class="catalog">
            <beer-card 
                v-for="(beer, index) in beers"
                :favoriteBeerIds="favoriteBeerIds"
                :beer=beer
                :key=index
                @addFavoriteBeerId="addFavoriteBeerId"
                @removeFavoriteBeer="removeFavoriteBeer"
            />
        </section>
    <catalog-spinner v-if="isLoading"/>
    </article>
</template>

<script>
import SearchPanel from './SearchPanel';
import BeerCard from './BeerCard';
import Spinner from './Spinner';

export default {
    data() {
        return {
            catalogParams: {
                page: 1,
                per_page: 9
            }   
        }
    },
    components: {
        'beer-card': BeerCard,
        'search-panel': SearchPanel,
        'catalog-spinner': Spinner
    },
    mounted() {
        window.addEventListener('scroll', this.loadNextBeerPage);
        this.$store.dispatch('fetchFavoriteBeerIds');
        this.loadBeers();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.loadNextBeerPage);
        this.$store.commit('RESET_BEERS');
        this.$store.commit('RESET_FECTHED');
        this.$store.commit('RESET_URL_PARAMS');
        this.resetPage();
    },
    computed: {
        beers() {
            return this.$store.getters.getCatalogBeersInfo;
        },
        isLoading() {
            return this.$store.state.isLoading;
        },
        favoriteBeerIds() {
            return this.$store.state.favoriteBeerIds;
        }
    },
    methods: {
        loadBeers() {
            this.$store.commit('ADD_URL_PARAMS', this.catalogParams);
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
        },
        // saveFavorites() {
        //     this.$store.dispatch('updateFavoriteBeerIds');
        // }
    }
}
</script>

<style>
    .page-content {
        margin: 100px 0 0;
    }
    .catalog {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        align-items: end;
        width: 1240px;
        margin: 40px auto;
    }
</style>

