<template>
    <article
        v-page-scroll="loadNextPage"
        class="catalog"
    >
        <search-panel
            :search-params="searchParams"
            @paramsChanged="addSearchParams"
            @onSearchStart="loadBeerPage"
            @reset="resetCatalog"
            @reload="reloadCatalog"
        />
        <grid-list >
            <catalog-card
                v-for="beer in beers"
                :beer="beer"
                :key="beer.id"
                :favorite-beer-ids="favoriteBeerIds"
            />
        </grid-list>
        <spinner v-if="isSpinnerShown"/>
    </article>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GridList from 'common/components/lists/GridList';
import Spinner from 'common/components/other/Spinner';
import pageScroll from 'common/directives/pageScroll';
import SearchPanel from './SearchPanel';
import CatalogCard from './CatalogCard';

export default {
    components: {
        SearchPanel,
        GridList,
        CatalogCard,
        Spinner
    },
    directives: {
        pageScroll
    },
    data() {
        return {
            pageParams: {
                pageNumber: 1,
                itemsPerPage: 9
            },
            searchParams: {},
            isSpinnerShown: false
        };
    },
    computed: {
        ...mapState('catalog', ['beers']),
        ...mapState('catalog/favoritesManagement', ['favoriteBeerIds'])
    },
    mounted() {
        this.loadFavoriteBeerIds();
        this.loadBeerPage();
    },
    beforeDestroy() {
        this.resetCatalog();
    },
    methods: {
        ...mapActions('catalog', ['loadBeers', 'resetBeers']),
        ...mapActions('catalog/favoritesManagement', ['loadFavoriteBeerIds']),
        loadBeerPage() {
            this.showSpinner();
            const catalogParams = { ...this.pageParams, ...this.searchParams };
            this.loadBeers(catalogParams);
        },
        loadNextPage() {
            this.incrementPage();
            this.loadBeerPage();
        },
        incrementPage() {
            this.pageParams.pageNumber++;
        },
        addSearchParams(searchParams) {
            this.searchParams = { ...this.searchParams, ...searchParams };
        },
        showSpinner() {
            this.isSpinnerShown = true;
        },
        resetPage() {
            this.pageParams.pageNumber = 1;
        },
        resetSearchParams() {
            this.searchParams = {};
        },
        resetCatalog() {
            this.resetBeers();
            this.resetPage();
            this.resetSearchParams();
        },
        reloadCatalog() {
            this.resetCatalog();
            this.loadBeerPage();
        }
    }
};
</script>

<style>
.catalog {
    margin: 150px 0 0;
}
</style>

