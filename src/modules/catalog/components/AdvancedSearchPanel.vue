<template>
    <section class="advanced-search-panel">
        <div class="advanced-search-panel__inner">
            <slider
                :min-value="2"
                :max-value="14"
                label="Alcohol by volume"
                @valueChanged="addAlcoholByVolume"
            />
            <slider
                :min-value="0"
                :max-value="120"
                label="International Bitterness Units"
                @valueChanged="addBitternessUnits"
            />
            <slider
                :min-value="4"
                :max-value="80"
                label="Color by EBC"
                @valueChanged="addColorByEBC"
            />
        </div>
    </section>
</template>

<script>
import Slider from 'common/components/other/Slider';

export default {
    components: {
        Slider
    },
    data() {
        return {
            advancedParams: {
                alcoholByVolume: 0,
                bitternessUnits: 0,
                colorByEBC: 0
            }
        };
    },
    methods: {
        submitSearch() {
            this.$emit('searchSubmitting', this.advancedParams);
        },
        addAlcoholByVolume(value) {
            this.advancedParams.alcoholByVolume = value;
            this.submitSearch();
        },
        addBitternessUnits(value) {
            this.advancedParams.bitternessUnits = value;
            this.submitSearch();
        },
        addColorByEBC(value) {
            this.advancedParams.colorByEBC = value;
            this.submitSearch();
        }
    }
};
</script>

<style>
.advanced-search-panel {
    margin-top: 40px;
}

.advanced-search-panel__inner {
    display: inline-block;
}
</style>

