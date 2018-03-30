<template>
    <div class="slider">
        <span class="slider__name" v-cloak> {{ label }} </span>
        <input type="range" :min="minValue" :max="maxValue" class="slider__ranger" v-model.number="value" @change="valueChanged">
        <span class="slider__note" v-cloak> more than {{ value }}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        value: Number,
        minValue: Number,
        maxValue: Number,
    },
    methods: {
        valueChanged() {
            this.$emit('valueChanged');
        }
    }
}
</script>
