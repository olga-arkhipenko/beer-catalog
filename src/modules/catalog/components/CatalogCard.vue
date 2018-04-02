<template>
    <div class="beer-card">
        <img
            :src="beer.image"
            alt="Beer pic"
            class="beer-card__image"
        >
        <div class="beer-card__info">
            <h3 class="beer-card__name">{{ beer.name }}</h3>
            <p class="beer-card__tagLine">{{ beer.tagLine }}</p>
            <div class="toggle-bar">
                <button class="toggle-bar__button">open</button>
                <button
                    v-if="isFavoriteBeer"
                    class="toggle-bar__button"
                    @click="addFavoriteBeer(beer.id)"
                >add to favorite</button>
                <button
                    v-else
                    class="toggle-bar__button"
                    @click="removeFavoriteBeer(beer.id)"
                >remove favorite</button>
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
        },
        favoriteBeerIds: {
            type: Array,
            required: true
        }
    },
    computed: {
        isFavoriteBeer() {
            return !this.favoriteBeerIds.includes(this.beer.id);
        }
    },
    methods: mapActions('favoritesManagement', ['addFavoriteBeer', 'removeFavoriteBeer'])
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
    display: grid;

    min-height: 220px;
    padding: 5px 20px;

    text-align: left;

    background-color: #31374c;
}

.beer-card__name {
    color: #56a558;
}

.beer-card__tagLine {
    color: #abc0d8;
}

.toggle-bar {
    display: flex;

    margin: 15px 20px;

    font-size: 1.2rem;

    justify-content: space-between;
}

.toggle-bar__button {
    cursor: pointer;
    text-transform: uppercase;

    color: #ffe696;
    border: none;
    background-color: transparent;
}

.toggle-bar__button:hover {
    color: #dd44a3;
}
</style>
