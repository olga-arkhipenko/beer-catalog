<template>
    <article class="search-panel">
        <input type=search 
            v-model.trim="inputBeerName" 
            v-on:keyup.enter="submitSearch" 
            class="search-panel__input" 
            placeholder="What are you looking for?"
        >
        <button class="search-panel__button search-panel__button--cansel" @click="cleanSearch">Cansel</button>
        <button class="search-panel__button" v-on:click="submitSearch">Search</button>
        <adavanced-search-panel v-on:submitSearch="submitSearch" v-if="isAdvancedSearchPanelShown"/>
    </article>
</template>

<script>
import UrlCreator from '../api/utilities/UrlCreator';
import AdvancedSearchPanel from './AdvancedSearchPanel';

export default {
    data() {
        return {
            inputBeerName: '',
            isAdvancedSearchPanelShown: true
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
            if(this.searchingBeerName) {
                this.$store.commit('RESET_BEERS');
                this.$store.commit('RESET_CATALOG_PAGE');
                this.$store.commit('SET_SEARCH_PARAMS', {beer_name: this.searchingBeerName});
                this.$emit('loadBeers');
                console.log('длина '+this.$store.state.beers.length)
                // if(this.$store.state.beers.length > 0) {
                    this.showAdvancedSearchPanel();
                // }
            }
        },
        showAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = true;
        },
        hideAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = false;
        },
        cleanSearch() {
            this.inputBeerName = '';
            this.$store.commit('RESET_BEERS');
            this.$store.commit('RESET_CATALOG_PAGE');
            this.$store.commit('RESET_SEARCH_PARAMS');
            this.hideAdvancedSearchPanel();
            this.$emit('loadBeers');
        }
    }
}
</script>

<style>
    .search-panel {
        width: 100%;
        margin-top: 40px;
        font-family: 'Helvetica', sans-serif;
        text-align: center;
    }
    .search-panel__input {
        width: 20rem;
        padding: 5px;
        border: none;
        border-bottom: 1px solid #c6d4e2;
        color: #36495d;
    }
    .search-panel__button {
        background-color: transparent;
        border: none;
        color: #36495d;
        cursor: pointer;
    }
    .search-panel__button--cansel {
        color: #ff4383;
    }
</style>

