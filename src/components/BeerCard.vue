<template>
    <div class="beer-card">
        <div class="beerCard__image">
            <img :src="image" alt="Beer pic" width="50px">
        </div>
        <h2>{{name}}</h2>
        <h3>{{tagline}}</h3>
        <button class="">open</button>
        <!-- <button class="" @click="addFavoriteBeer($event, beer.id)" v-if="isAddFavoriteButtonShown">add to favorite</button> -->
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        tagLine: {
            type: String,
            require: true
        }
    }
}
</script>

<style>
    .beerCard__image {
        height: 200px;
    }
</style>
