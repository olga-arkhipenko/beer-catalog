<template>
    <article class="favorites">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <favorite-beer-card
            v-for="(beer, index) in favoriteBeers"
            :favoriteBeerIds="favoriteBeerIds"
            :beer=beer
            :key=index
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
import FavoriteBeerCard from './FavoriteBeerCard';
import Pagination from './Pagination';

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
        this.favoritesParams.page = 1;
    },
    components: {
        'favorite-beer-card': FavoriteBeerCard,
        'favorites-pagination': Pagination
    },
    methods: {
        loadFavoriteBeers() {
            console.log('loading params '+JSON.stringify({ids: this.$store.state.favoriteBeerIds.join('|')}))
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
            console.log('on page ' + pageNumber);
            this.favoritesParams.page = pageNumber;
            this.loadFavoriteBeers();
        }
    }
}
</script>

<style>
    .favorites {
        width: 1024px;
        margin: 0 auto;
    }
    .favorites__heading {
        margin: 30px 0;
        font-family: 'Helvetica', sans-serif;
        font-size: 2rem;
        text-align: center;
    }
</style>


