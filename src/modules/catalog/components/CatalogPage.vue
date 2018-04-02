<template>
    <article
        class="catalog"
    >
        <search-panel
            :search-params="searchParams"
            @loadBeerPage="loadBeerPage"
            @resetPage="resetPage"
            @resetSearchParams="resetSearchParams"
        />
        <grid-list>
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
import pageUtil from 'common/utilities/pageUtil';
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
            searchParams: {
                name: '',
                alcoholByVolume: 0,
                bitternessUnits: 0,
                colorByEBC: 0
            }
        };
    },
    computed: {
        ...mapState('catalog', ['beers', 'isLoading']),
        ...mapState('favoritesManagement', ['favoriteBeerIds']),
        isSpinnerShown() {
            return this.isLoading;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.loadNextPage);
        this.loadFavoriteBeerIds();
        this.loadBeerPage(this.pageParams);
    },
    beforeDestroy() {
        this.resetBeers();
        window.removeEventListener('scroll', this.loadNextPage);
        this.resetPage();
        this.resetSearchParams();
    },
    methods: {
        ...mapActions('catalog', ['loadBeers', 'resetBeers']),
        ...mapActions('favoritesManagement', ['loadFavoriteBeerIds']),
        loadBeerPage() {
            const catalogParams = { ...this.pageParams, ...this.searchParams };
            this.loadBeers(catalogParams);
        },
        loadNextPage() {
            if (pageUtil.isBottom()) {
                this.incrementPage();
                this.loadBeerPage();
            }
        },
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
};
</script>

<style>
.catalog {
    margin: 150px 0 0;
}
</style>

