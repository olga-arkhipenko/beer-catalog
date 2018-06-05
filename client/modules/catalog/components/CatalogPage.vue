<template>
    <page-scroller :scroll-handler="loadNextPage">
        <article class="page">
            <search-panel
                :search-params="searchParams"
                @paramsChanged="addSearchParams"
                @onSearchStart="loadBeerPage"
                @reset="resetCatalog"
                @reload="reloadCatalog"/>
            <grid-list
                v-if="beers.length > 0"
                :items="beers">
                <template slot-scope="props">
                    <catalog-card
                        :favorite-beer-ids="favoriteBeerIds"
                        :beer="props.item"/>
                </template>
            </grid-list>
            <spinner v-if="isSpinnerShown"/>
        </article>
    </page-scroller>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GridList from 'common/components/lists/GridList';
import Spinner from 'common/components/other/Spinner';
import PageScroller from 'common/components/wrappers/PageScrollWrapper';
import SearchPanel from './SearchPanel';
import CatalogCard from './CatalogCard';

export default {
    components: {
        SearchPanel,
        GridList,
        CatalogCard,
        Spinner,
        PageScroller
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
        ...mapState('user', ['userData']),

        isSpinnerShown() {
            return this.beers.length % this.pageParams.itemsPerPage === 0;
        }
    },
    mounted() {
        this.loadFavoriteBeerIds(this.userData);
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

