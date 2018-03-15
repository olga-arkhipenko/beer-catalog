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
    computed: {
        favoriteBeers() {
            return this.$store.state.favoriteBeers;
        }
    },
    components: {
        'favorite-beer-card': FavoriteBeerCard,
        'favorites-pagination': Pagination
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


