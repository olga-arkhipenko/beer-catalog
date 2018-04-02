<template>
    <article class="favorites">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <row-list>
            <favorites-card
                v-for="beer in favoriteBeers"
                :beer="beer"
                :key="beer.id"
            />
        </row-list>
        <pagination
            :current-page="favoritesParams.pageNumber"
            :total-items="favoriteBeerIds.length"
            :items-per-page="favoritesParams.itemsPerPage"
            @pageChanged="changePage"
        />
    </article>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Pagination from 'common/components/other/Pagination';
import RowList from 'common/components/lists/RowList';
import FavoritesCard from './FavoritesCard';

export default {
    components: {
        RowList,
        FavoritesCard,
        Pagination
    },
    data() {
        return {
            favoritesParams: {
                pageNumber: 1,
                itemsPerPage: 5
            }
        };
    },
    computed: {
        ...mapState('favorites', ['favoriteBeers']),
        ...mapState('favoritesManagement', ['favoriteBeerIds'])
    },
    mounted() {
        this.loadFavoriteBeerIds();
        this.loadBeerPage();
    },
    beforeDestroy() {
        this.resetPage();
    },
    methods: {
        ...mapActions('favorites', ['loadFavoriteBeers']),
        ...mapActions('favoritesManagement', ['loadFavoriteBeerIds']),
        loadBeerPage() {
            const favoritesParams = { ...this.favoritesParams, beerIds: this.favoriteBeerIds };
            this.loadFavoriteBeers(favoritesParams);
        },
        changePage(pageNumber) {
            this.favoritesParams.pageNumber = pageNumber;
            this.loadBeerPage();
        },
        resetPage() {
            this.favoritesParams.pageNumber = 1;
        }
    }
};
</script>

<style>
.favorites {
    width: 1024px;
    margin: 140px auto;
}
.favorites__heading {
    margin: 30px 0;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
    text-align: center;
}
</style>

