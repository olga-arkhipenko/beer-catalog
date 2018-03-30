<template>
    <article class="favorites">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <favorite-beer-card
            v-for="beer in favoriteBeers"
            :favoriteBeerIds="favoriteBeerIds"
            :beer="beer"
            :key="beer.id"
            @loadFavoriteBeerPage="loadFavoriteBeerPage"
        />
        <favorites-pagination
            :currentPage="favoritesParams.pageNumber"
            :totalItems="favoriteBeerIds.length"
            :itemsPerPage="favoritesParams.itemsPerPage"
            @changePage="changePage"
        />
    </article>
</template>

<script>
import FavoriteBeerCard from './FavoritesCard';
import Pagination from 'common/components/Pagination';
import {mapState, mapActions} from 'vuex';

export default {
    data() {
        return {
            favoritesParams: {
                pageNumber: 1,
                itemsPerPage: 5
            }
        }
    },
    components: {
        'favorite-beer-card': FavoriteBeerCard,
        'favorites-pagination': Pagination
    },
    mounted() {
        this.loadFavoriteBeerIds();
        this.loadFavoriteBeerPage();
    },
    computed: {
        ...mapState('favorites', ['favoriteBeers']),
        ...mapState('local', ['favoriteBeerIds']),
    },
    beforeDestroy() {
        this.resetPage();
    },
    methods: {
        ...mapActions('favorites', ['loadFavoriteBeers']),
        ...mapActions('local', ['loadFavoriteBeerIds']),
        loadFavoriteBeerPage() {
            const payload = {...this.favoritesParams, beerIds: this.favoriteBeerIds};
            this.loadFavoriteBeers(payload);
        },
        changePage(pageNumber) {
            this.favoritesParams.pageNumber = pageNumber;
            this.loadFavoriteBeerPage();
        },
        resetPage() {
            this.favoritesParams.pageNumber = 1;
        }
    }
}
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


