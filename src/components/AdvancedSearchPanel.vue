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
                abvRange: 8,
                ibuRange: 61,
                ebcRange: 42
            }
        },
        watch: {
            abvRange() {
                console.log(this.abvRange);
            },
            ibuRange() {
                console.log(this.ibuRange);
            },
            ebcRange() {
                console.log(this.ebcRange);
            }
        }
    }
</script>

<style>
    .adavanced-search-panel {
        margin-top: 40px;
    }
</style>

