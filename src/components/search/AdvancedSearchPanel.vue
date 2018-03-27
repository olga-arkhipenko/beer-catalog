<template>
    <section class="advanced-search-panel">
        <div class="advanced-search-panel__inner">
            <div class="advanced-search-panel__filter">
                <span class="advanced-search-panel__filter-name">Alcohol by volume</span>
                <label>
                    <input type="range" min="2" max="14" class="advanced-search-panel__range" v-model.number="advancedParams.alcoholByVolume" @change="submitSearch">
                    <span class="advanced-search-panel__filter-note" v-cloak>more than {{advancedParams.abv_gt}}</span>
                </label>
            </div>
            <div class="advanced-search-panel__filter">
                <span class="advanced-search-panel__filter-name">International Bitterness Units</span>
                <label>
                    <input type="range" min="0" max="120" class="advanced-search-panel__range" v-model.number="advancedParams.InterBitUnits" @change="submitSearch">
                    <span v-cloak class="advanced-search-panel__filter-note">more than {{advancedParams.ibu_gt}}</span>
                </label>
            </div>
            <div class="advanced-search-panel__filter">
                <span class="advanced-search-panel__filter-name">Color by EBC</span>
                <label>
                    <input type="range" min="4" max="80" class="advanced-search-panel__range" v-model.number="advancedParams.colorByEBC" @change="submitSearch">
                    <span v-cloak class="advanced-search-panel__filter-note">more than {{advancedParams.ebc_gt}}</span>
                </label>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                advancedSearchParams: {
                    alcoholByVolume: 2,
                    InterBitUnits: 0,
                    colorByEBC: 4
                }
            }
        },
        methods: {
            submitSearch() {
                this.$emit('addSearchingParams', this.advancedSearchParams);
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

