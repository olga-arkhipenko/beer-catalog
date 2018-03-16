<template>
    <article>
        <search-panel
        ref="searchPanel"
        @loadBeerPage="loadBeerPage"
        @resetPage="resetPage"
        />
        <section class="catalog">
            <beer-card 
                v-for="(beer, index) in beers"
                :favoriteBeerIds="favoriteBeerIds"
                :beer=beer
                :key=index
                @addFavoriteBeerId="addFavoriteBeerId"
                @removeFavoriteBeerId="removeFavoriteBeerId"
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
        this.loadBeerPage();
        this.$store.dispatch('fetchFavoriteBeers');
    },
    created() {
        window.addEventListener('scroll', () => {
            if(this.isBottom()) {
                this.incrementPage();
                this.loadBeerPage(this.$refs.searchPanel.searchingParams);
            }
        })
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
        incrementPage() {
            this.catalogParams.page++;
        },
        loadBeerPage(searchingParams) {
            this.$store.dispatch('fetchBeerPage', {...this.catalogParams, ...searchingParams});
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
        removeFavoriteBeerId(favoriteBeerId) {
            this.$store.dispatch('removeFavoriteBeerId', favoriteBeerId)
        }
    }
}
</script>

<style>
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

