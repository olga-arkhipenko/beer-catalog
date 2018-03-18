<template>
    <div class="beer-card">
        <img :src="beer.image" alt="Beer pic" class="beer-card__image">
        <div class="beer-card__info">
            <h3 class="beer-card__name">{{beer.name}}</h3>
            <p class="beer-card__tagLine">{{beer.tagLine}}</p>
            <div class="toggle-bar">
                <button class="toggle-bar__button">open</button>
                <button class="toggle-bar__button" @click="addFavoriteBeerId($event, beer.id)" v-if="isAddFavoriteButtonShown">add to favorite</button>
                <button class="toggle-bar__button" @click="removeFavoriteBeerId($event, beer.id)" v-else>remove favorite</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        beer: {
            type: Object
        },
        favoriteBeerIds: {
            type: Array
        }
    },
    computed: {
        isAddFavoriteButtonShown() {
            console.log(this.favoriteBeerIds)
            return !this.favoriteBeerIds.includes(this.beer.id);
        }
    },
    methods: {
        addFavoriteBeerId(event, favoriteBeerId) {
            console.log('adding card')
            this.$emit('addFavoriteBeerId', favoriteBeerId);
        },
        removeFavoriteBeerId(event, favoriteBeerId) {
            console.log('removing card')
            this.$emit('removeFavoriteBeerId', favoriteBeerId);
        }
    }
}
</script>

<style>
    .beer-card {
        font-family: 'Courier New', Courier, monospace;
        font-size: 1rem;
        text-align: center;
        background-color: #f3f9ff;
        color: #ffffff;
    }
    .beer-card__image {
        margin: 30px 0;
        height: 300px;
        vertical-align: bottom;
    }
    .beer-card__info {
        display: grid;
        min-height: 200px;
        padding: 5px 20px;
        background-color: #36495d;
        text-align: left;
    }
    .beer-card__name {
        color: #fff1c5;
    }
    .beer-card__tagLine {
        color: #abc0d8;
    }
    .toggle-bar {
        background-color: #36495d;
        display: flex;
        justify-content: space-between;
        margin: 15px 20px;
        font-size: 1.2rem;
    }
    .toggle-bar__button {
        color: #e4fffd;
        background-color: transparent;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
    }
    .toggle-bar__button:hover {
        color: #ffe696;
    }
    
</style>
