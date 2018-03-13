<template>
    <article class="search-panel">
        <input type="text" v-model.trim="inputBeerName" v-on:keyup.enter="submitSearch">
        <!-- <button @click="cleanSearch">x</button> -->
        <button v-on:click="submitSearch">Search</button>
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
    // props: {
    //     loadBeers: {
    //         type: Function,
    //         required: true
    //     }
    // },
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
            // if(this.searchingBeerName) {
                // this.$store.dispatch('getFoundBeers', this.searchingBeerName);
                this.$store.commit('RESET_BEERS');
                this.$store.commit('RESET_CATALOG_PAGE');
                this.$emit('loadBeers', {beer_name: this.searchingBeerName})
            // }
        },
        // cleanSearch() {
        //     this.inputBeerName = '';
        //     this.$store.commit('RESET_CATALOG_PAGE_NUMBER');
        //     this.$store.commit('CLEAN_BEERS');
        // }
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

