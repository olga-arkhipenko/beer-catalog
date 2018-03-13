<template>
    <article class="search-panel">
        <input type="text" v-model.trim="inputBeerName" @keyup.enter="submitSearch">
        <button @click="cleanSearch">x</button>
        <button @click="submitSearch">Search</button>
        <adavanced-search-panel></adavanced-search-panel>
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
        searchBeerName(){
            return this.inputBeerName.toLowerCase().replace(/\s+/g, '_')
        }
    },
    methods: {
        submitSearch() {
            console.log(this.searchBeerName);
            if(this.searchBeerName) {
                this.$store.dispatch('getFoundBeers', this.searchBeerName);
            }
        },
        cleanSearch() {
            this.inputBeerName = '';
            this.$store.commit('RESET_CATALOG_PAGE_NUMBER');
            this.$store.commit('CLEAN_BEERS');
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

