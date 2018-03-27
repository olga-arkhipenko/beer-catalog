<template>
    <section class="grid-list">
        <beer-card 
            v-for="beer in beers"
            :beer="beer"
            :favoriteBeerIds="favoriteBeerIds"
            :key="beer.id"
        />
    </section>
</template>

<script>
import CatalogBeerCard from '../cards/CatalogBeerCard';

export default {
    props: {
        beers: Array,
        favoriteBeerIds: Array
    },
    components: {
        'beer-card': CatalogBeerCard
    }
}
</script>


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

