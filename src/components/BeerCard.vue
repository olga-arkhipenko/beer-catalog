<template>
    <div class="beer-card">
        <div class="beerCard__image">
            <img :src="beer.image" alt="Beer pic" width="50px">
        </div>
        <h2>{{beer.name}}</h2>
        <h3>{{beer.tagLine}}</h3>
        <button class="">open</button>
        <button class="" @click="addFavoriteBeer($event, beer.id)" v-if="isAddFavoriteButtonShown">add to favorite</button>
        <button class="" v-if="isRemoveFavoriteButtonShown">remove favorite</button>
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
    .beerCard__image {
        height: 200px;
    }
</style>
