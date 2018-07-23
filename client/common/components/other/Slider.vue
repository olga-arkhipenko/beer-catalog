<template>
    <div class="slider">
        <div class="slider__inner">
            <p
                v-cloak
                class="slider__name"
            > {{ label }} </p>
            <input
                :min="minValue"
                :max="maxValue"
                v-model.number="tempValue"
                type="range"
                class="slider__ranger"
                @change="triggerValueChange">
        </div>
        <p
            v-cloak
            class="slider__note"
        > more than {{ tempValue }}</p>
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

.slider__inner {
    display: flex;

    width: 80%;

    justify-content: space-between;
}

.slider__name {
    display: inline-block;

    width: 100%;
    margin: 0 2rem 0 0;

    text-align: left;

    font-size: 1.1rem;
}

.slider__ranger {
    cursor: pointer;
    vertical-align: middle;
}

.slider__note {
    display: inline-block;

    margin: 0;
    padding: 0;

    color: #6d6c96;

    font-size: 0.8rem;
}
</style>

