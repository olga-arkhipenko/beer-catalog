<template>
    <article class="favorites">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <favorite-beer-card
            v-for="beer  in favoriteBeers"
            :favoriteBeerIds="favoriteBeerIds"
            :beer="beer"
            :key="beer.id"
            @removeFavoriteBeer="removeFavoriteBeer"
        />
        <favorites-pagination
            :current-page="favoritesParams.page"
            :total-beers="favoriteBeerIds.length"
            :beers-per-page="favoritesParams.per_page"
            @changePage="changePage"
        />
    </article>
</template>

<script>
import FavoriteBeerCard from '../cards/FavoriteBeerCard';
import Pagination from '../utilities/Spinner';

export default {
    data() {
        return {
            favoritesParams: {
                page: 1,
                per_page: 5
            }
        }
    },
    mounted() {
        this.$store.dispatch('fetchFavoriteBeerIds');
        this.loadFavoriteBeers();
    },
    computed: {
        favoriteBeers() {
            return this.$store.getters.getFavoriteBeersInfo;
        },
        favoriteBeerIds() {
            return this.$store.state.favoriteBeerIds;
        }
    },
    beforeDestroy() {
        this.$store.commit('RESET_FECTHED');
        this.$store.commit('RESET_URL_PARAMS');
        this.resetPage();
    },
    components: {
        'favorite-beer-card': FavoriteBeerCard,
        'favorites-pagination': Pagination
    },
    methods: {
        loadFavoriteBeers() {
            this.$store.commit('ADD_URL_PARAMS', { ...this.favoritesParams, ids: this.$store.state.favoriteBeerIds.join('|')});
            this.$store.dispatch('fetchFavoriteBeers');
        },
        removeFavoriteBeer(favoriteBeerId) {
            this.$store.dispatch('removeFavoriteBeer', favoriteBeerId);
            this.loadFavoriteBeers();
        },
        addFavoriteBeerId(favoriteBeerId) {
            this.$store.dispatch('addFavoriteBeerId', favoriteBeerId)
        },
        changePage(pageNumber) {
            this.favoritesParams.page = pageNumber;
            this.loadFavoriteBeers();
        },
        resetPage() {
            this.favoritesParams.page = 1;
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


