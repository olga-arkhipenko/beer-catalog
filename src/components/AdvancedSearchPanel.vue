<template>
    <section class="adavanced-search-panel">
        <label>
            <span>Alcohol by volume</span>
            <input type="range" v-model="abvRange" min="2" max="14">
        </label>
        <br>
        <label>
            <span>International Bitterness Units</span>
            <input type="range" v-model="ibuRange" min="0" max="120">
        </label>
        <br>
        <label>
            <span>Color by EBC</span>
            <input type="range" v-model="ebcRange" min="4" max="80">
        </label>
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
        watch: {
            abvRange() {
                console.log(this.abvRange);
                this.$store.commit('SET_SEARCH_PARAMS', {abv_gt: this.abvRange});
                this.$emit('submitSearch');
            },
            ibuRange() {
                console.log(this.ibuRange);
                this.$store.commit('SET_SEARCH_PARAMS', {ibu_gt: this.ibuRange});
                this.$emit('submitSearch');
            },
            ebcRange() {
                console.log(this.ebcRange);
                this.$store.commit('SET_SEARCH_PARAMS', {ebc_gt: this.ebcRange});
                this.$emit('submitSearch');
            }
        }
    }
</script>

<style>
    .adavanced-search-panel {
        margin-top: 40px;
    }
</style>

