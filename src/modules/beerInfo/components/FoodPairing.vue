<template>
    <section class="food-pairing">
        <h2 class="food-pairing__heading">Food Pairing</h2>
        <ul class="food-pairing__list beer-info-list">
            <li
                v-for="(foodPair, index) in foodPairing"
                v-cloak
                :key="index"
                class="beer-info-list__item"
            > {{ foodPair.name }}.
            </li>
        </ul>
    </section>
</template>


<script>
export default {
    props: {
        foodPairing: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
.food-pairing {
    float: left;

    margin: 40px;
}

.food-pairing__heading {
    color: #31374c;
}

</style>

