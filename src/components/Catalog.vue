<template>
    <article>
        <search-panel @loadBeerPage="loadBeerPage"/>
        <section class="catalog">
            <beer-card 
                v-for="(beer, index) in beers"
                :beer=beer
                :key=index
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
        this.loadBeerPage(this.catalogParams);
        // this.$store.dispatch('getFavoriteBeers');
    },
    created() {
        window.addEventListener('scroll', () => {
            if(this.isBottom()) {
                this.incrementPage();
                console.log(this.catalogParams.page);
                // this.$store.commit('INCREMENT_CATALOG_PAGE');
                this.loadBeerPage(this.catalogParams);
            }
        })
    },
    computed: {
        beers() {
            return this.$store.getters.getCatalogBeersInfo;
        },
        isLoading() {
            return this.$store.state.isLoading;
        }
    },
    methods: {
        incrementPage() {
            this.catalogParams.page++;
        },
        loadBeerPage(catalogParams){
            this.$store.dispatch('fetchBeerPage', catalogParams);
        },
        isBottom(){
            const scrollY = window.scrollY;
            const visibleContent = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const pageBottom = visibleContent + scrollY >= pageHeight;
            return pageBottom || pageHeight < visibleContent;
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

