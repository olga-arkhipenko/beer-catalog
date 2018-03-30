<template>
    <section class="advanced-search-panel">
        <div class="advanced-search-panel__inner">
            <slider
                label="Alcohol by volume"
                :value="searchParams.alcoholByVolume"
                :minValue="2"
                :maxValue="14"
                @valueChanged="submitSearch"
            />
            <slider
                label="International Bitterness Units"
                :value="searchParams.interBitUnits"
                :minValue="0"
                :maxValue="120"
                @valueChanged="submitSearch"
            />
            <slider
                label="Color by EBC"
                :value="searchParams.colorByEBC"
                :minValue="4"
                :maxValue="80"
                @valueChanged="submitSearch"
            />
        </div>
    </section>
</template>

<script>
import Slider from 'common/components/Slider';

export default {
    props: {
        searchParams: Object
    },
    components: {
        Slider
    },
    methods: {
        submitSearch() {
            this.$emit('submitSearch');
        }
    }
}
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
        justify-content: space-between;
        margin: 0 0 10px;
    }

    .advanced-search-panel__filter-name {
        display: inline-block;
        margin: 0 20px 0 0;
        font-size: 1.1rem;
    }

    .advanced-search-panel__range {
        vertical-align: middle;
        cursor: pointer;
    }
    
    .advanced-search-panel__filter-note {
        font-size: 0.8rem;
        color: #6d6c96;
    }
</style>

