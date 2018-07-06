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
                    <catalog-card :beer="props.item"/>
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
import notificationHelper from 'common/helpers/notification/notificationHelper';
import configs from 'common/helpers/notification/configs';
import actionTypes from 'catalogModule/store/actions/constants';
import SearchPanel from './SearchPanel';
import CatalogCard from './CatalogCard';

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => vm.$store.dispatch('getCurrentUserData'));
    },
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
        ...mapState({
            beers: state => state.catalog.beers
        }),

        isSpinnerShown() {
            return this.beers.length % this.pageParams.itemsPerPage === 0;
        }
    },
    mounted() {
        this.loadBeerPage();
    },
    beforeDestroy() {
        this.resetCatalog();
    },
    methods: {
        ...mapActions({
            loadBeers: actionTypes.LOAD_BEERS,
            resetBeers: actionTypes.RESET_BEERS
        }),

        loadBeerPage() {
            const catalogParams = { ...this.pageParams, ...this.searchParams };
            const promise = this.loadBeers(catalogParams);
            notificationHelper.showNotification(promise, configs.beersLoading);
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

