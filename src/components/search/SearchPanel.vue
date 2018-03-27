<template>
    <article class="search-panel">
        <input type=search 
            v-model.trim="inputBeerName" 
            @keyup.enter="submitSearch" 
            class="search-panel__search-line" 
            placeholder="What are you looking for?"
        >
        <button class="close-sign action-button search-panel__button" @click="submitCleanSearch">&#215;</button>
        <button class="action-button search-panel__button" @click="submitSearch">&#128269;</button>
        <adavanced-search-panel 
            @submitSearch="submitSearch"
            @addSearchParams="addSearchParams"
            v-if="isAdvancedSearchPanelShown"
        />
    </article>
</template>

<script>
import AdvancedSearchPanel from './AdvancedSearchPanel';
import {mapActions} from 'vuex';

export default {
    data() {
        return {
            inputBeerName: '',
            isAdvancedSearchPanelShown: false,
        }
    },
    props: {
        searchParams: Object
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
        ...mapActions('catalog', ['resetStore']),

        submitSearch() {
            if(this.searchBeerName) {
                this.resetStore();
                this.$emit('resetPage');
                this.addSearchParams({beer_name: this.searchingBeerName});
                this.$emit('loadBeerPage');
                this.showAdvancedSearchPanel();
            }
        },
        addSearchParams(searchParams) {
            this.searchParams = {...this.searchParams, ...searchParams};
        },
        showAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = true;
        },
        hideAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = false;
        },
        cleanSearch() {
            // this.inputBeerName = '';
            // this.$store.commit('RESET_BEERS');
            // this.$store.commit('RESET_FECTHED');
            // this.$store.commit('RESET_URL_PARAMS');
            // this.hideAdvancedSearchPanel();
        },
        submitCleanSearch() {
            // this.cleanSearch();
            // this.$emit('loadBeers');
        }
    }
}
</script>

<style>
    .search-panel {
        width: 100%;
        margin: 0 0 60px;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
    }

    .search-panel__search-line {
        width: 20rem;
        padding: 5px;
        border: none;
        border-bottom: 2px solid #c6d4e2;
        color: #36495d;
    }
    
    .search-panel__button {
        font-size: 1.5rem;
    }
</style>

