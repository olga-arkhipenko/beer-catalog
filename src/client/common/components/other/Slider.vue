<template>
    <div class="slider">
        <span
            v-cloak
            class="slider__name"
        > {{ label }} </span>
        <input
            :min="minValue"
            :max="maxValue"
            v-model.number="tempValue"
            type="range"
            class="slider__ranger"
            @change="triggerValueChange">
        <span
            v-cloak
            class="slider__note"
        > more than {{ tempValue }}</span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true
        },
        label: {
            type: String,
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
    data() {
        return {
            tempValue: 0
        };
    },
    methods: {
        triggerValueChange() {
            this.$emit('update:value', this.tempValue);
        }
    }
};
</script>

<style>
.slider {
    display: flex;

    margin: 0 0 10px;

    justify-content: space-between;
}

.slider__name {
    display: inline-block;

    margin: 0 20px 0 0;

    font-size: 1.1rem;
}

.slider__ranger {
    cursor: pointer;
    vertical-align: middle;
}

.slider__note {
    color: #6d6c96;

    font-size: 0.8rem;
}
</style>

