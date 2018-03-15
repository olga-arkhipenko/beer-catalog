<template>
    <section class="advanced-search-panel">
        <div class="advanced-search-panel__inner">
            <label>
                <span>Alcohol by volume</span>
                <input type="range"  class="advanced-search-panel__range" v-model.number="abvRange" min="2" max="14" @change="addSearchParams">
            </label>
            <label>
                <span>International Bitterness Units</span>
                <input type="range"  class="advanced-search-panel__range" v-model.number="ibuRange" min="0" max="120" @change="addSearchParams">
            </label>
            <label>
                <span>Color by EBC</span>
                <input type="range"  class="advanced-search-panel__range" v-model.number="ebcRange" min="4" max="80" @change="addSearchParams">
            </label>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                abvRange: 0,
                ibuRange: 0,
                ebcRange: 0
            }
        },
        methods: {
            addSearchParams(){
                this.$store.commit('SET_SEARCH_PARAMS', {abv_gt: this.abvRange, ibu_gt: this.ibuRange, ebc_gt: this.ebcRange});
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

