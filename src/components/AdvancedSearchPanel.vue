<template>
    <section class="advanced-search-panel">
        <div class="advanced-search-panel__inner">
            <label>
                <span>Alcohol by volume</span>
                <input type="range" min="2" max="14" class="advanced-search-panel__range" v-model.number="advancedParams.abv_gt" @change="submitSearch">
                <span v-cloak>more than {{advancedParams.abv_gt}}</span>
            </label>
            <label>
                <span>International Bitterness Units</span>
                <input type="range" min="0" max="120" class="advanced-search-panel__range" v-model.number="advancedParams.ibu_gt" @change="submitSearch">
                <span v-cloak>more than {{advancedParams.ibu_gt}}</span>
            </label>
            <label>
                <span>Color by EBC</span>
                <input type="range" min="4" max="80" class="advanced-search-panel__range" v-model.number="advancedParams.ebc_gt" @change="submitSearch">
                <span v-cloak>more than {{advancedParams.ebc_gt}}</span>
            </label>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                advancedParams: {
                    abv_gt: 2,
                    ibu_gt: 0,
                    ebc_gt: 4
                }
            }
        },
        methods: {
            submitSearch() {
                this.$emit('addSearchingParams', this.advancedParams);
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
        display: inline-grid;
        grid-row-gap: 20px;
        text-align: left;
    }
    .advanced-search-panel__range {
        cursor: pointer;
    }
</style>

