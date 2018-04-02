<template>
    <section class="advanced-search-panel">
        <div class="advanced-search-panel__inner">
            <slider
                :value="searchParams.alcoholByVolume"
                :min-value="2"
                :max-value="14"
                label="Alcohol by volume"
                @valueChanged="submitSearch"
            />
            <slider
                :min-value="0"
                :max-value="120"
                :value="searchParams.bitternessUnits"
                label="International Bitterness Units"
                @valueChanged="submitSearch"
            />
            <slider
                :value="searchParams.colorByEBC"
                :min-value="4"
                :max-value="80"
                label="Color by EBC"
                @valueChanged="submitSearch"
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
    props: {
        searchParams: {
            type: Object,
            required: true
        }
    },
    methods: {
        submitSearch(advancedParams) {
            this.$emit('valueChanged', advancedParams);
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

