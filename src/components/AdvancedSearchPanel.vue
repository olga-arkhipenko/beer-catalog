<template>
    <section class="advanced-search-panel">
        <div class="advanced-search-panel__inner">
            <label>
                <span>Alcohol by volume</span>
                <input type="range" class="advanced-search-panel__range" v-model.number="advancedParams.abv_gt" min="2" max="14" @change="submitSearch">
            </label>
            <label>
                <span>International Bitterness Units</span>
                <input type="range"  class="advanced-search-panel__range" v-model.number="advancedParams.ibu_gt" min="0" max="120" @change="submitSearch">
            </label>
            <label>
                <span>Color by EBC</span>
                <input type="range"  class="advanced-search-panel__range" v-model.number="advancedParams.ebc_gt" min="4" max="80" @change="submitSearch">
            </label>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                advancedParams: {
                    abv_gt: 0,
                    ibu_gt: 0,
                    ebc_gt: 0
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

