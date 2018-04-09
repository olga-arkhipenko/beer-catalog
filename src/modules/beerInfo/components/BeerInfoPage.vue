<template>
    <article class="beer-info">
        <img
            :src="beer.image"
            alt="Beer pic"
            class="beer-info__image">
        <h1
            v-cloak
            class="beer-info__heading">{{ beer.name }}</h1>
        <p
            v-cloak
            class="beer-info__tag">{{ beer.tagline }}</p>
        <button
            v-if="isFavoriteBeer"
            class=""
            @click="removeFavoriteBeer(beer.id)"
        >remove favorite</button>
        <button
            v-else
            class=""
            @click="addFavoriteBeer(beer.id)"
        >add favorite</button>
        <p class="beer-info__description">
            {{ beer.description }}
        </p>
        <properties :beer="beer"/>
        <food-pairing :food-pairing="beer.foodPairing"/>
        <div class="clearfix"/>
        <brewing :brewing="beer.brewing"/>
    </article>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import Properties from './Properties';
import FoodPairing from './FoodPairing';
import Brewing from './Brewing';

export default {
    components: {
        Properties,
        FoodPairing,
        Brewing
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState('beerInfo', ['beer']),
        ...mapState('beerInfo/favoritesManagement', ['favoriteBeerIds']),
        isFavoriteBeer() {
            return this.favoriteBeerIds.includes(this.beer.id);
        }
    },
    mounted() {
        this.loadBeer(this.id);
    },
    beforeDestroy() {
        this.resetBeer();
    },
    methods: {
        ...mapActions('beerInfo', ['loadBeer', 'resetBeer']),
        ...mapActions('beerInfo/favoritesManagement', ['addFavoriteBeer', 'removeFavoriteBeer'])
    }
};
</script>

<style>
.beer-info {
    margin: 120px 0 0;

    font-family: "Courier New", Courier, monospace;
}
.beer-info__heading {
    color: #31374c;
}
.beer-info__image {
    float: right;

    height: 300px;
}
</style>

