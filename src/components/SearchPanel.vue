<template>
    <article class="search-panel">
        <input type=search 
            v-model.trim="inputBeerName" 
            @keyup.enter="submitSearch" 
            class="search-panel__search-line" 
            placeholder="What are you looking for?"
        >
        <button class="search-panel__button search-panel__button" @click="submitCleanSearch">&#10006;</button>
        <button class="search-panel__button" @click="submitSearch">&#128269;</button>
        <adavanced-search-panel 
            @submitSearch="submitSearch"
            @addSearchingParams="addSearchingParams"
            v-if="isAdvancedSearchPanelShown"
        />
    </article>
</template>

<script>
import UrlCreator from '../api/utilities/UrlCreator';
import AdvancedSearchPanel from './AdvancedSearchPanel';

export default {
    data() {
        return {
            inputBeerName: '',
            isAdvancedSearchPanelShown: false,
            searchingParams: {}
        }
    },
    beforeDestroy() {
        this.cleanSearch();
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
                this.$store.commit('RESET_FECTHED');
                this.$emit('resetPage');
                this.addSearchingParams({beer_name: this.searchingBeerName});
                this.$store.commit('ADD_URL_PARAMS', this.searchingParams);
                this.$emit('loadBeers');
                this.showAdvancedSearchPanel();
            }
        },
        addSearchingParams(additionalParams) {
            this.searchingParams = {...this.searchingParams, ...additionalParams};
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
            this.$store.commit('RESET_FECTHED');
            this.$store.commit('RESET_URL_PARAMS');
            this.hideAdvancedSearchPanel();
        },
        submitCleanSearch() {
            this.cleanSearch();
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
    .search-panel__search-line {
        width: 20rem;
        padding: 5px;
        border: none;
        border-bottom: 1px solid #c6d4e2;
        color: #36495d;
    }
    .search-panel__button {
        font-size: 1.2rem;
        background-color: transparent;
        border: none;
        color: #36495d;
        cursor: pointer;
    }
</style>

