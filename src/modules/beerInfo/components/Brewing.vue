<template>
    <section class="brewing">
        <h2 class="brewing__heading">Brewing</h2>
        <p v-cloak>{{ brewing.tips }}</p>
        <ingredients :ingredients="brewing.ingredients"/>
        <methods :methods="brewing.methods"/>
    </section>
</template>

<script>
import Ingredients from './Ingredients';
import Methods from './Methods';

export default {
    components: {
        Ingredients,
        Methods
    },
    props: {
        brewing: {
            type: Object,
            required: true
        }
    }
};
</script>

<style>
.brewing__heading {
    color: #31374c;
}
</style>

