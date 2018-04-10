<template>
    <article
        v-if="isLoaded"
        class="beer-info">
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
            class="beer-info__button action-button"
            @click="removeFavoriteBeer(beer.id)"
        >remove favorite</button>
        <button
            v-else
            class="beer-info__button action-button"
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
    <spinner
        v-else
        class="beer-info__spinner"/>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import Spinner from 'common/components/other/Spinner';
import Properties from './Properties';
import FoodPairing from './FoodPairing';
import Brewing from './Brewing';

export default {
    components: {
        Properties,
        FoodPairing,
        Brewing,
        Spinner
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
        },
        isLoaded() {
            return Object.keys(this.beer).length;
        }
    },
    mounted() {
        this.loadBeer(this.id);
        this.loadFavoriteBeerIds();
    },
    beforeDestroy() {
        this.resetBeer();
    },
    methods: {
        ...mapActions('beerInfo', ['loadBeer', 'resetBeer']),
        ...mapActions('beerInfo/favoritesManagement', ['addFavoriteBeer', 'removeFavoriteBeer', 'loadFavoriteBeerIds'])
    }
};
</script>

<style>
.beer-info {
    width: 1240px;
    margin: 120px auto 0;
    position: relative;

    font-family: "Courier New", Courier, monospace;
}

.beer-info__heading {
    color: #31374c;
}

.beer-info__image {
    float: right;

    height: 300px;
    margin: 20px;
}

.beer-info__button {
    padding: 10px 20px;

    text-transform: uppercase;

    color: #ffffff;
    background-color: #464c67;

    font-size: 1.3rem;
}

.beer-info__spinner {
    position: fixed;
    top: 300px;
}

</style>

