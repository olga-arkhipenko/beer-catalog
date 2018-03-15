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
        this.loadBeerPage();
        // this.$store.dispatch('getFavoriteBeers');
    },
    created() {
        window.addEventListener('scroll', () => {
            if(this.isBottom()) {
                this.incrementPage();
                console.log('from parent '+JSON.stringify(this.$refs.searchPanel.searchingParams));
                // this.$store.commit('INCREMENT_CATALOG_PAGE');
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
        }
    },
    methods: {
        incrementPage() {
            this.catalogParams.page++;
        },
        loadBeerPage(searchingParams) {
            console.log('where my '+ JSON.stringify(this.catalogParams))
            this.$store.dispatch('fetchBeerPage', {...this.catalogParams, ...searchingParams});
            console.log('isFetched  '+ this.$store.state.isFetched)
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

