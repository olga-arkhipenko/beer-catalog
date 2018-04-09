<template>
    <section class="food-pairing">
        <h2>Food Pairing</h2>
        <div
            v-for="foodPair in foodPairing"
            :key="foodPair.name"> {{ foodPair.name }}
        </div>
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
    float: right;
}
</style>

