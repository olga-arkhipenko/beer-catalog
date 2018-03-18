<template>
    <article class="favorites">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <favorite-beer-card
            v-for="(beer, index) in favoriteBeers"
            :favoriteBeerIds="favoriteBeerIds"
            :beer=beer
            :key=index
            @removeFavoriteBeerId="removeFavoriteBeerId"
            @addFavoriteBeerId="addFavoriteBeerId"
        />
        <favorites-pagination
            :current-page="favoritesParams.page"
            :total-items="favoriteBeerIdsCopy.length"
            :items-per-page="favoritesParams.per_page"
            @change-page="changePage"
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
            },
            favoriteBeerIdsCopy: []
        }
    },
    mounted() {
        this.$store.dispatch('fetchFavoriteBeerIds');
        this.setFavoriteBeerIdsCopy();
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
        this.$store.commit('RESET_BEERS');
        this.$store.commit('RESET_FECTHED');
        this.$store.commit('RESET_URL_PARAMS');
        this.favoritesParams.page = 1;
    },
    components: {
        'favorite-beer-card': FavoriteBeerCard,
        'favorites-pagination': Pagination
    },
    methods: {
        setFavoriteBeerIdsCopy(){
            this.favoriteBeerIdsCopy = this.$store.state.favoriteBeerIds;
            console.log('copied'+this.favoriteBeerIdsCopy)
        },
        loadFavoriteBeers() {
            console.log('lading params '+JSON.stringify({ids: this.favoriteBeerIdsCopy.join('|')}))
            this.$store.commit('ADD_URL_PARAMS',{ ...this.favoritesParams, ids: this.favoriteBeerIdsCopy.join('|')});
            this.$store.dispatch('fetchBeers');
        },
        removeFavoriteBeerId(favoriteBeerId) {
            this.$store.dispatch('removeFavoriteBeerId', favoriteBeerId);
        },
        addFavoriteBeerId(favoriteBeerId) {
            this.$store.dispatch('addFavoriteBeerId', favoriteBeerId)
        },
        changePage(pageNumber) {
            this.favoritesParams.page = pageNumber;
            this.loadFavoriteBeers();
        }
        // saveFavorites() {
        //     this.$store.dispatch('updateFavoriteBeerIds');
        // }

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


