<template>
    <div class="beer-card">
        <img :src="beer.image" alt="Beer pic" class="beer-card__image">
        <div class="beer-card__description">
            <h3 class="beer-card__name">{{beer.name}}</h3>
            <p class="beer-card__tagLine">{{beer.tagLine}}</p>
            <div class="toggle-bar">
                <button class="toggle-bar__button">open</button>
                <button class="toggle-bar__button" @click="addFavoriteBeer($event, beer.id)" v-if="isAddFavoriteButtonShown">add to favorite</button>
                <button class="toggle-bar__button" v-if="isRemoveFavoriteButtonShown">remove favorite</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAddFavoriteButtonShown: true,
            isRemoveFavoriteButtonShown: false
        }
    },
    props: ['beer'],
    methods: {
        hideAddFavoriteButton() {
            this.isAddFavoriteButtonShown = false;
        },
        showAddFavoriteButton() {
            this.isAddFavoriteButtonShown = true;
        },
        hideRemoveFavoriteButtonShown() {
            this.isRemoveFavoriteButtonShown = false;
        },
        showRemoveFavoriteButtonShown() {
            this.isRemoveFavoriteButtonShown = true;
        },
        addFavoriteBeer(event, favoriteBeerId) {
            this.hideAddFavoriteButton();
            this.$emit('addFavoriteBeer', {id: favoriteBeerId});
            this.showRemoveFavoriteButtonShown();
        }
    }
}
</script>

<style>
    .beer-card {
        font-family: 'Helvetica', sans-serif;
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
    .beer-card__description {
        display: grid;
        min-height: 180px;
        padding: 5px 20px;
        background-color: #36495d;
        text-align: left;
    }
    .toggle-bar {
        background-color: #36495d;
        display: flex;
        justify-content: space-between;
        margin: 15px 20px;
        font-size: 1.2rem;
    }
    .toggle-bar__button {
        background-color: transparent;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
    }
    .toggle-bar__button:hover {
        color: #6284a8;
    }
    
</style>
