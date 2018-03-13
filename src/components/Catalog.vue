<template>
    <article>
        <search-panel></search-panel>
        <section class="catalog">
        <div v-for="beer in beers">
            <img :src="beer.image" alt="Beer pic" width="50px">
            <h2>{{beer.name}}</h2>
            <h3>{{beer.tagline}}</h3>
        </div>
    </section>
    </article>
</template>

<script>
import SearchPanel from './SearchPanel';

export default {
    components: {
        'search-panel': SearchPanel
    },
    beforeMount(){

    },
    created() {
        window.addEventListener('scroll', () => {
            if(this.isBottom()){
                this.loadBeers();
            }
        })
    },
    computed: {
        beers() {
            if(this.$store.state.beers.length === 0){
                this.loadBeers();
            }
            return this.$store.getters.getBeersForCatalog;
        }
    },
    methods: {
        loadBeers(){
            console.log(this.$store.state.catalogPageNumber);
            this.$store.dispatch('getBeerPage');
            this.$store.commit('INCREMET_CATALOG_PAGE_NUMBER');
        },
        isBottom(){
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const pageBottom = visible + scrollY >= pageHeight
            return pageBottom || pageHeight < visible
        }
    }
  
}
</script>

<style>
    .catalog{
        width: 1024px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: 33.333% 33.333% 33.333%;
        grid-column-gap: 20px;
    }
</style>

