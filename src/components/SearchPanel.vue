<template>
    <article class="search-panel">
        <input type="text" v-model.trim="inputBeerName" v-on:keyup.enter="submitSearch">
        <button @click="cleanSearch">x</button>
<<<<<<< HEAD
        <button @click="submitSearch">Search</button>
        <adavanced-search-panel></adavanced-search-panel>
=======
        <button v-on:click="submitSearch">Search</button>
        <adavanced-search-panel v-on:submitSearch="submitSearch"></adavanced-search-panel>
>>>>>>> 81e5fe9c21c6f7c0852e361d3ea8edd57202aecc
    </article>
</template>

<script>
import UrlCreator from '../api/utilities/UrlCreator';
import AdvancedSearchPanel from './AdvancedSearchPanel';

export default {
    data() {
        return {
            inputBeerName: ''
        }
    },
    components: {
        'adavanced-search-panel': AdvancedSearchPanel
    },
    computed: {
        searchingBeerName(){
            return this.inputBeerName.toLowerCase().replace(/\s+/g, '_')
        }
    },
    methods: {
        submitSearch() {
            console.log(this.searchingBeerName);
            this.$store.commit('RESET_BEERS');
            this.$store.commit('RESET_CATALOG_PAGE');
            this.$store.commit('SET_SEARCH_PARAMS', {beer_name: this.searchingBeerName});
            this.$emit('loadBeers');
        },
        cleanSearch() {
            this.inputBeerName = '';
            this.$store.commit('RESET_BEERS');
            this.$store.commit('RESET_CATALOG_PAGE');
            this.$store.commit('RESET_SEARCH_PARAMS');
            this.$emit('loadBeers');
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

