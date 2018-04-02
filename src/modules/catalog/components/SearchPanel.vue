<template>
    <article class="search-panel">
        <input
            v-model.trim="inputName"
            class="search-panel__search-line"
            placeholder="What are you looking for?"
            type="search"
            @keyup.enter="submitSearch"
        >
        <button
            class="close-sign action-button search-panel__button"
            @click="submitClean">&#215;</button>
        <button
            class="action-button search-panel__button"
            @click="submitSearch">&#128269;</button>
        <adavanced-search-panel
            v-if="isAdvancedSearchPanelShown"
            :search-params="searchParams"
            @submitSearch="submitSearch"
        />
    </article>
</template>

<script>
import AdvancedSearchPanel from './AdvancedSearchPanel';

export default {
    components: {
        AdvancedSearchPanel
    },
    props: {
        searchParams: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            inputName: '',
            isAdvancedSearchPanelShown: false
        };
    },
    computed: {
        formattedName() {
            return this.inputName.toLowerCase().replace(/\s+/g, '_');
        }
    },
    methods: {
        submitSearch() {
            if (this.formattedName) {
                this.resetStore();
                this.$emit('resetPage');
                this.$emit('loadBeerPage');
                this.showAdvancedSearchPanel();
            }
        },
        showAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = true;
        },
        hideAdvancedSearchPanel() {
            this.isAdvancedSearchPanelShown = false;
        },
        // clean() {
        //     this.inputName = '';
        //     this.$emit('resetPage');
        //     this.$emit('resetSearchParams');
        //     this.hideAdvancedSearchPanel();
        // },
        submitClean() {
            // this.cleanSearch();
            this.$emit('loadBeerPage');
        }
    }
};
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

