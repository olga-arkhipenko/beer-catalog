<template>
    <section class="ingredients">
        <h2 class="ingredients__heading">Ingredients</h2>
        <div class="beer-info-list">
            <h3>Malt</h3>
            <p
                v-for="malt in ingredients.malt"
                v-cloak
                :key="malt.id">
                "{{ malt.name }}" - {{ malt.value }} {{ malt.unit }}
            </p>
            <h3>Hops</h3>
            <p
                v-for="hops in ingredients.hops"
                v-cloak
                :key="hops.id">"{{ hops.name }}" - {{ hops.value }}
                {{ hops.unit }}, {{ hops.attribute }},
                add when {{ hops.add || 'start' }}
            </p>
            <h3>Yeast</h3>
            <p v-cloak>{{ ingredients.yeast.name }}</p>
            <div/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        ingredients: {
            type: Object,
            required: true
        }
    }
};
</script>

<style>
.ingredients {
    float: left;
    margin: 10px 30px 20px 0;
    max-width: 50%;
}

.ingredients__heading {
    color: #31374c;
}
</style>

