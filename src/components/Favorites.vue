<template>
    <article class="favorites">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <favorite-beer-card
            v-for="(beer, index) in favoriteBeers"
            :beer=beer
            :key=index
        />
        <favorites-pagination/>
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
        // favoriteBeerIds() {
        //     return this.$store.state.favoriteBeerIds.join('|');
        // },
        favoriteBeers() {
            return this.$store.getters.getFavoriteBeersInfo;
        }
    },
    beforeDestroy() {
        this.$store.commit('RESET_BEERS');
        this.$store.commit('RESET_FECTHED');
        this.$store.commit('RESET_URL_PARAMS');
    },
    components: {
        'favorite-beer-card': FavoriteBeerCard,
        'favorites-pagination': Pagination
    },
    methods: {
        loadFavoriteBeers() {
            if(this.$store.state.favoriteBeerIds) {
                console.log('lading params '+JSON.stringify(this.$store.getters.getFavoriteBeerIdsUrlParams))
                this.$store.commit('ADD_URL_PARAMS',{ ...this.favoritesParams, ...this.$store.getters.getFavoriteBeerIdsUrlParams});
                this.$store.dispatch('fetchBeers');
            }
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


