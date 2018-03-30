<template>
    <article class="catalog">
        <search-panel
            :searchParams="searchParams"
            @loadBeerPage="loadBeerPage"
            @resetPage="resetPage"
            @resetSearchParams="resetSearchParams"
        />
        <grid-list
            :beers="beers"

        />
        <spinner v-if="isSpinnerShown"/>
    </article>
</template>

<script>
import SearchPanel from './SearchPanel';
import GridList from 'common/components/GridList';
import Spinner from 'common/components/Spinner';
import {mapState, mapActions} from 'vuex';

export default {
    data() {
        return {
            pageParams: {
                pageNumber: 1,
                itemsPerPage: 9
            },
            searchParams: {
                beerName: '',
                alcoholByVolume: 0,
                interBitUnits: 0,
                colorByEBC: 0
            },
            isSpinnerShown: false
        }
    },
    components: {
        SearchPanel,
        GridList,
        Spinner
    },
    mounted() {
        // this.loadFavoriteBeerIds();
        this.loadBeerPage();
    },
    beforeDestroy() {
        this.resetStore();
        this.resetPage();
        this.resetSearchParams();
    },
    computed: {
        ...mapState('catalog', ['beers', 'isLoading']),
        // ...mapState('local', ['favoriteBeerIds']),
    },
    methods: {
        ...mapActions('catalog', ['loadBeers', 'openCatalogPage', 'resetStore']),
        // ...mapActions('local', ['loadFavoriteBeerIds']),
        loadBeerPage() {
            console.log(JSON.stringify(this.searchParams));
            const catalogParams = {...this.pageParams, ...this.searchParams};
            this.loadBeers(catalogParams);
        },
        loadNextBeerPage() {
            console.log('im called')
            // if(windowUtils.isBottom()) {
                this.incrementPage();
                this.loadBeerPage();
            // }
        },
        // addSearchParams(additionalParams) {
        //     this.searchParams = {...this.searchParams, ...additionalParams};
        // },
        incrementPage() {
            this.pageParams.pageNumber++;
        },
        resetPage() {
            this.pageParams.pageNumber = 1;
        },
        resetSearchParams() {
            this.searchParams = {
                beerName: '',
                alcoholByVolume: 0,
                interBitUnits: 0,
                colorByEBC: 0
            };
        }
    }
}
</script>

<style>
    .catalog {
        margin: 150px 0 0;
    }
</style>

