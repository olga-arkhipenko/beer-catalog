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
        submitSearch() {
            this.$emit('submitSearch');
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

.advanced-search-panel__filter {
    display: flex;

    margin: 0 0 10px;

    justify-content: space-between;
}

.advanced-search-panel__filter-name {
    display: inline-block;

    margin: 0 20px 0 0;

    font-size: 1.1rem;
}

.advanced-search-panel__range {
    cursor: pointer;
    vertical-align: middle;
}

.advanced-search-panel__filter-note {
    color: #6d6c96;

    font-size: 0.8rem;
}
</style>

