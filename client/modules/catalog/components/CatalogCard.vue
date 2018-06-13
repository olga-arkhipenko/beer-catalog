<template>
    <div class="beer-card">
        <img
            :src="beer.image"
            alt="Beer pic"
            class="beer-card__image"
        >
        <div class="beer-card__info">
            <h3 class="beer-card__name">{{ beer.name }}</h3>
            <p class="beer-card__tag">{{ beer.tagline }}</p>
            <div class="toggle-bar">
                <router-link
                    :to="`/beers/${beer.id}`"
                    class="link toggle-bar__button">open</router-link>
                <a
                    v-if="beer.isFavorite"
                    class="link toggle-bar__button toggle-bar__button-remove"
                    @click="submitRemoveFavoriteBeer(beer.id)"
                >remove favorite</a>
                <a
                    v-else
                    class="link toggle-bar__button toggle-bar__button-add"
                    @click="submitAddFavoriteBeer(beer.id)"
                >add favorite</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        beer: {
            type: Object,
            required: true
        }
    },
    methods: mapActions('user', ['submitRemoveFavoriteBeer', 'submitAddFavoriteBeer'])
};
</script>

<style>
.beer-card {
    text-align: center;

    color: #ffffff;
    background-color: #f3f9ff;

    font-family: "Courier New", Courier, monospace;
    font-size: 1rem;
}

.beer-card__image {
    height: 300px;
    margin: 30px 0;

    vertical-align: bottom;
}

.beer-card__info {
    position: relative;

    min-height: 200px;
    padding: 5px 20px;

    text-align: left;

    background-color: #31374c;
}

.beer-card__name {
    color: #56a558;
}

.beer-card__tag {
    color: #abc0d8;
}

.toggle-bar {
    position: absolute;
    bottom: 0;

    margin: 20px;

    font-size: 1.2rem;

    justify-content: space-between;
}

.toggle-bar__button {
    cursor: pointer;
    text-transform: uppercase;

    color: #38a39e;
    border: none;
    background-color: transparent;
}

.toggle-bar__button-remove {
    margin: 0 0 0 0.5rem;
}

.toggle-bar__button-add {
    margin: 0 0 0 2.5rem;
}

.toggle-bar__button:hover {
    color: #ffb259;
}
</style>
