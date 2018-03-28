<template>
    <article class="catalog">
        <search-panel
        @loadBeerPage="loadBeerPage"
        @addSearchParams="addSearchParams"
        @resetPage="resetPage"
        @resetSearchParams="resetSearchParams"
        />
        <grid-list
        :beers="beers"
        :favoriteBeerIds="favoriteBeerIds"
        />
        <catalog-spinner v-if="isLoading"/>
    </article>
</template>

<script>
import SearchPanel from '../search/SearchPanel';
import GridList from '../lists/GridList';
import Spinner from '../utilities/Spinner';
import windowUtils from '../../utils/windowUtils';
import {mapState, mapActions} from 'vuex';

export default {
    data() {
        return {
            catalogParams: {
                pageNumber: 1,
                itemsPerPage: 9
            },
            searchParams: {},
            isSpinnerShown: false
        }
    },
    components: {
        'search-panel': SearchPanel,
        'grid-list': GridList,
        'catalog-spinner': Spinner
    },
    mounted() {
        window.addEventListener('scroll', this.loadNextBeerPage);
        this.openCatalogPage(this.catalogParams);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.loadNextBeerPage);
        this.resetStore();
        this.resetPage();
        this.resetSearchParams();
    },
    computed: mapState('catalog', ['beers', 'favoriteBeerIds', 'isLoading']),
    methods: {
        ...mapActions('catalog', ['loadBeers', 'loadFavoriteBeerIds', 'openCatalogPage', 'resetStore']),

        loadBeerPage() {
            const payload = {...this.catalogParams, ...this.searchParams};
            this.loadBeers(payload);
        },
        loadNextBeerPage() {
            if(windowUtils.isBottom()) {
                this.incrementPage();
                this.loadBeerPage();
            }
        },
        addSearchParams(additionalParams) {
            this.searchParams = {...this.searchParams, ...additionalParams};
        },
        incrementPage() {
            this.catalogParams.pageNumber++;
        },
        resetPage() {
            this.catalogParams.pageNumber = 1;
        },
        resetSearchParams() {
            this.searchParams = {};
        }
    }
}
</script>

<style>
    .catalog {
        margin: 150px 0 0;
    }
</style>

