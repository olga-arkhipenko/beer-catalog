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
            @addAllSearchParams="addAllSearchParams"
            v-if="isAdvancedSearchPanelShown"
        />
    </article>
</template>

<script>
import AdvancedSearchPanel from './AdvancedSearchPanel';
import {mapActions} from 'vuex';

export default {
    props: {
        initialSearchParams: Object
    },
    data() {
        return {
            inputBeerName: '',
            isAdvancedSearchPanelShown: false,
            advancedSearchParams: {}
        }
    },
    components: {
        'adavanced-search-panel': AdvancedSearchPanel
    },
    computed: {
        formattedBeerName(){
            return this.inputBeerName.toLowerCase().replace(/\s+/g, '_')
        }
    },
    methods: {
        ...mapActions('catalog', ['resetStore']),

        submitSearch() {
            if(this.formattedBeerName) {
                this.resetStore();
                this.$emit('resetPage');
                this.addAllSearchParams();
                this.$emit('loadBeerPage');
                this.showAdvancedSearchPanel();
            }
        },
        addAllSearchParams(advancedSearchParams) {
            const allSearchParams = {beerName: this.formattedBeerName, ...advancedSearchParams};
            this.$emit('addSearchParams', allSearchParams);
        },
        showAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = true;
        },
        hideAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = false;
        },
        cleanSearch() {
            this.inputBeerName = '';
            this.$emit('resetPage');
            this.$emit('resetSearchParams');
            this.resetStore();
            this.hideAdvancedSearchPanel();
        },
        submitCleanSearch() {
            this.cleanSearch();
            this.$emit('loadBeerPage');
        }
    }
}
</script>

<style>
.search-panel {
    width: 100%;
    margin: 0 0 60px;

    text-align: center;

    font-family: "Courier New", Courier, monospace;
}

.search-panel__search-line {
    width: 20rem;
    padding: 5px;

    color: #36495d;
    border: none;
    border-bottom: 2px solid #c6d4e2;
}

.search-panel__button {
    font-size: 1.5rem;
}

</style>

