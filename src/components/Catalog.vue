<template>
    <article>
        <search-panel @loadBeers="loadBeers"/>
        <section class="catalog">
            <beer-card 
                v-for="(beer, index) in beers"
                :beer="beer"

                :key="index"
                @addFavoriteBeer="addFavoriteBeer"
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
    components: {
        'beer-card': BeerCard,
        'search-panel': SearchPanel,
        'catalog-spinner': Spinner
    },
    mounted() {
        this.loadBeers();
    },
    created() {
        window.addEventListener('scroll', () => {
            if(this.isBottom()) {
                this.$store.commit('INCREMENT_CATALOG_PAGE');
                this.loadBeers();
            }
        })
    },
    computed: {
        beers() {
            return this.$store.getters.getFormattedBeers;
        },
        isLoading() {
            return this.$store.state.isLoading;
        }
    },
    methods: {
        loadBeers(){
            this.$store.dispatch('getBeerPage');
            console.log('page '+this.$store.state.catalogParams.page);
            console.log('searchParams '+this.$store.state.searchParams);
        },
        isBottom(){
            const scrollY = window.scrollY;
            const visibleContent = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const pageBottom = visibleContent + scrollY >= pageHeight;
            return pageBottom || pageHeight < visibleContent;
        },
        addFavoriteBeer(favoriteBeer) {
            console.log(favoriteBeer.id);
            this.$store.commit('ADD_FAVORITE', favoriteBeer.id);
        },
        // removeFavoriteBeer() {

        // }
    }
}
</script>

<style>
    .catalog {
        width: 1024px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: 33.333% 33.333% 33.333%;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
</style>

