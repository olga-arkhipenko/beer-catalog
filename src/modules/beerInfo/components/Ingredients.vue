<template>
    <section class="ingredients">
        <h2 class="ingredients__heading">Ingredients</h2>
        <div class="beer-info-list">
            <h3>Malt</h3>
            <p
                v-for="(malt, index) in ingredients[0]"
                v-cloak
                :key="index">
                "{{ malt.name }}" - {{ malt.value }} {{ malt.units }}
            </p>
            <h3>Hops</h3>
            <p
                v-for="(hops, index) in ingredients[1]"
                v-cloak
                :key="index">"{{ hops.name }}" - {{ hops.value }}
                {{ hops.units }}, {{ hops.attribute }},
                add when {{ hops.add || 'start' }}
            </p>
            <h3>Yeast</h3>
            <p v-cloak>{{ ingredients[2].name }}</p>
            <div/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        ingredients: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
.ingredients {
    float: left;

    margin: 40px;
}

.ingredients__heading {
    color: #31374c;
}
</style>

