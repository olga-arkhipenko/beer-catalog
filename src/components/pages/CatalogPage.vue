<template>
    <article class="catalog">
        <search-panel
        :searchParams="searchParams"
        @loadBeerPage="loadBeerPage"
        @resetPage="resetPage"
        />
        <grid-list
        :beers="beers"
        :favoriteBeerIds="favoriteBeerIds"
        />
        <catalog-spinner v-if="isSpinnerShown"/>
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
        this.openCatalogPage();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.loadNextBeerPage);
        // this.$store.commit('RESET_BEERS');
        // this.$store.commit('RESET_FECTHED');
        // this.$store.commit('RESET_URL_PARAMS');
        // this.resetPage();
    },
    computed: mapState('catalog', ['beers', 'favoriteBeerIds']),
    methods: {
        ...mapActions('catalog', ['loadBeers', 'loadFavoriteBeerIds', 'openCatalogPage']),

        loadBeerPage(catalogParams, searchParams) {
            const payload = {...catalogParams, ...searchParams};
            this.loadBeers(payload);
        },
        loadNextBeerPage() {
            if(windowUtils.isBottom()) {
                this.incrementPage();
                this.loadBeerPage(this.catalogParams, this.searchParams);
            }
        },
        incrementPage() {
            this.catalogParam.pageNumber++;
        },
        resetPage() {
            this.catalogParam.pageNumber = 1;
        }
    }
}
</script>

<style>
    .catalog {
        margin: 150px 0 0;
    }
</style>

