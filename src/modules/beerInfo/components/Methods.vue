<template>
    <section class="methods">
        <h2 class="methods__heading">Methods</h2>
        <section class="methods__list beer-info-list">
            <h3>Mash</h3>
            <div
                v-for="(mashTemp, index) in methods.mashTemp"
                v-cloak
                :key="index">
                <p v-if="mashTemp.duration">{{ mashTemp.duration }} minutes, </p>
                <p>temperature - {{ mashTemp.value }} {{ mashTemp.unit }}</p>
            </div>
            <h3>Fermentation</h3>
            <span v-cloak>Perform at
                {{ methods.fermentation.value }}
                {{ methods.fermentation.unit }}</span>
            <div v-if="methods.twist.name">
                <h3>Twist</h3>
                <span v-cloak>{{ methods.twist.name }}</span>
            </div>
        </section>
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

    margin: 10px 0 20px;
    max-width: 50%;
}

.methods__heading {
    color: #31374c;
}

.methods__list {
    min-width: 200px;
}
</style>
