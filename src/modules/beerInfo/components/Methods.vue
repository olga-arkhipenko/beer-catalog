<template>
    <section class="methods">
        <h2 class="methods__heading">Methods</h2>
        <div class="methods__list beer-info-list">
            <h3>Mash</h3>
            <p
                v-for="(mashTemp, index) in methods[0]"
                v-cloak
                :key="index">
                {{ mashTemp.duration || 'A few' }} minutes
                at {{ mashTemp.temperature }}
            </p>
            <h3>Fermentation</h3>
            <p v-cloak>Perform at {{ methods[1].value }} {{ methods[1].unit }} °C</p>
            <h3>Twist</h3>
            <p v-cloak>{{ methods[2].name || 'nothing' }}</p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        methods: {
            type: Array,
            required: true
        }
    }
};
</script>


<style>
.methods {
    float: left;
    margin: 40px;
}

.methods__heading {
    color: #31374c;
}

.methods__list {
    min-width: 200px;
}
</style>
