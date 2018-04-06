<template>
    <scroll-wrapper @pageScrolled="loadNextPage">
        <article class="catalog">
            <search-panel
                :search-params="searchParams"
                @paramsChanged="addSearchParams"
                @onSearchStart="loadBeerPage"
                @reset="resetCatalog"
                @reload="reloadCatalog"
            />
            <grid-list :items="beers">
                <catalog-card
                    :favorite-beer-ids="favoriteBeerIds"
                    scope-slot="beer"
                />
            </grid-list>
            <spinner v-if="isSpinnerShown"/>
        </article>
    </scroll-wrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GridList from 'common/components/lists/GridList';
import Spinner from 'common/components/other/Spinner';
import ScrollWrapper from 'common/components/wrappers/ScrollWrapper';
import SearchPanel from './SearchPanel';
import CatalogCard from './CatalogCard';

export default {
    components: {
        SearchPanel,
        GridList,
        CatalogCard,
        Spinner,
        ScrollWrapper
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

