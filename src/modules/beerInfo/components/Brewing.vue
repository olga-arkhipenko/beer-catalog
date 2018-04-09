<template>
    <section class="brewing">
        <h2>Brewing</h2>
        <p v-cloak>{{ brewing.tips }}</p>
        <ingredients :ingredients="brewing.ingredients"/>
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
