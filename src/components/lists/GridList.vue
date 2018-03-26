<template>
    <section class="grid-list">
        <beer-card 
            v-for="beer in beers"
            :favoriteBeerIds="favoriteBeerIds"
            :beer="beer"
            :key="beer.id"
            @addFavoriteBeerId="addFavoriteBeerId"
            @removeFavoriteBeer="removeFavoriteBeer"
        />
    </section>
</template>

<style>
    .grid-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        align-items: end;
        width: 1240px;
        margin: 40px auto;
    }
</style>

