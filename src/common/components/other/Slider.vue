<template>
    <div class="slider">
        <span
            v-cloak
            class="slider__name"
        > {{ label }} </span>
        <input
            :min="minValue"
            :max="maxValue"
            v-model.number="value"
            type="range"
            class="slider__ranger"
            @change="triggerValueChange">
        <span
            v-cloak
            class="slider__note"
        > more than {{ value }}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        minValue: {
            type: Number,
            required: true
        },
        maxValue: {
            type: Number,
            required: true
        }
    },
    methods: {
        triggerValueChange() {
            this.$emit('valueChanged');
        }
    }
};
</script>
