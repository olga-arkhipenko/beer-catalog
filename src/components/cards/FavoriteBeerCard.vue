<template>
    <div class="favorite-beer-card">
        <div class="favorite-beer-card__info">
            <h3 class="favorite-beer-card__name">{{beer.name}}</h3>
            <p class="favorite-beer-card__tagLine">{{beer.tagLine}}</p>
            <p class="favorite-beer-card__description">{{beer.description}}</p>
            <div class="favorite-bar">
                <button class="action-button favorite-bar__button">open</button>
                <button class="action-button favorite-bar__button" @click="removeFavoriteBeer(beer.id)">remove favorite</button>
            </div>
        </div>
        <img :src="beer.image" alt="Beer pic" class="favorite-beer-card__image">
    </div>
</template>

<script>
export default {
    props: {
        beer: Object,
        favoriteBeerIds: Array
    },
    methods: {
        removeFavoriteBeer(favoriteBeerId) {
            this.$emit('removeFavoriteBeer', favoriteBeerId);
        }
    }
}
</script>

<style>
    .favorite-beer-card {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin: 0 0 30px;
        padding: 20px 30px;
        font-family: 'Courier New', Courier, monospace;
        border: 1px solid #c7d7e9;
        box-shadow: 10px 10px 0px -4px #c7d7e9;
    }

    .favorite-beer-card__name {
        color: #467d47;
    }

    .favorite-beer-card__tagLine {
        color: #465b72;
    }

    .favorite-beer-card__image {
        height: 250px;
        padding: 0 50px;
    }

    .favorite-bar {
        margin: 40px 0 10px;
    }

    .favorite-bar__button {
        font-size: 1.3rem;
        font-weight: 600;
        color: #5a6fb9;
        text-transform: uppercase;
    }

    .favorite-bar__button:hover {
        color: #dd44a3;
    }
</style>


