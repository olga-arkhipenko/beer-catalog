<template>
    <article
        v-page-scroll="loadNextPage"
        class="catalog">
        <search-panel
            :search-params="searchParams"
            @paramsChanged="addSearchParams"
            @onSearchStart="loadBeerPage"
            @reset="resetCatalog"
            @reload="reloadCatalog"
        />
        <grid-list
            v-if="beers.length > 0"
            :items="beers"
        >
            <template slot-scope="props">
                <catalog-card
                    :favorite-beer-ids="favoriteBeerIds"
                    :beer="props.item"
                />
            </template>
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
            searchParams: {}
        };
    },
    computed: {
        ...mapState('catalog', ['beers']),
        ...mapState('catalog/favoritesManagement', ['favoriteBeerIds']),
        isSpinnerShown() {
            return this.beers.length % this.pageParams.itemsPerPage === 0;
        }
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

