<template>
    <section class="advanced-search-panel">
        <slider
            :min-value="2"
            :max-value="14"
            :value.sync="advancedParams.alcoholByVolume"
            label="Alcohol by volume"
            @update:value="submitSearch"
        />
        <slider
            :min-value="0"
            :max-value="120"
            :value.sync="advancedParams.bitternessUnits"
            label="International Bitterness Units"
            @update:value="submitSearch"
        />
        <slider
            :min-value="4"
            :max-value="80"
            :value.sync="advancedParams.colorByEBC"
            label="Color by EBC"
            @update:value="submitSearch"
        />
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
        }
    }
};
</script>

<style>
.advanced-search-panel {
    width: 60%;
    margin: 40px auto;
}
</style>

