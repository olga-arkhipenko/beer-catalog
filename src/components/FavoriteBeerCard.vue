<template>
    <div class="favorite-beer-card">
        <div class="favorite-beer-card__info">
            <h3 class="favorite-beer-card__name">{{beer.name}}</h3>
            <p class="favorite-beer-card__tagLine">{{beer.tagLine}}</p>
            <p class="favorite-beer-card__description">{{beer.description}}</p>
            <button class="toggle-bar__button">open</button>
            <button class="toggle-bar__button" @click="removeFavoriteBeer($event, beer)">remove favorite</button>
        </div>
        <img :src="beer.image" alt="Beer pic" class="favorite-beer-card__image">
    </div>
</template>

<script>
export default {
    props: {
        beer: {
            type: Object
        }
    },
    methods: {
        removeFavoriteBeer(event, favoriteBeer) {
            console.log('removing card');
            this.$store.commit('REMOVE_FAVORITE_BEER', favoriteBeer);
        }
    }
}
</script>

<style>
    .favorite-beer-card {
        display: flex;
        justify-content: space-between;
        margin: 0 0 30px;
        padding: 20px 30px;
        font-family: 'Helvetica', sans-serif;
        font-size: 1rem;
        border: 1px solid #f3f9ff;
        box-shadow: 9px 6px 34px -4px #c7d7e9;
        /* background-color: #f3f9ff; */
    }

    .favorite-beer-card__image {
        height: 250px;
        padding: 0 50px;
    }
        
</style>


