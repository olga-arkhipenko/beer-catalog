<template>
    <article class="search-panel">
        <input type="text" v-model.trim="inputBeerName" @keyup.enter="submitSearch">
    </article>
</template>

<script>
import UrlCreator from '../api/utilities/UrlCreator.js';
export default {
    data() {
        return {
            inputBeerName: ''
        }
    },
    computed: {
        searchBeerName(){
            return this.inputBeerName.toLowerCase().replace(/\s+/g, '_')
        }
    },
    methods: {
        submitSearch() {
            console.log(this.searchBeerName);
            this.$store.dispatch('getFoundBeers', this.searchBeerName);
        }
    }
}
</script>

<style>
    .search-panel {
        width: 100%;
        margin-top: 40px;
        text-align: center;
    }
</style>

