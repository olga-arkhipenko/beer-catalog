<template>
    <section class="catalog">
        <div v-for="beer in beers">
            <img :src="beer.image" alt="Beer pic" width="50px">
            <h2>{{beer.name}}</h2>
            <h3>{{beer.tagline}}</h3>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
        }
    },
    beforeMount() {
        if(this.currentPage > 1) {
            return;
        }
        this.loadBeers(this.currentPage);
    },
    computed:{
        beers() {
            return this.$store.getters.getBeersForCatalog;
        }
    },
    methods: {
        loadBeers(){
            this.$store.dispatch('getBeerPage', this.currentPage);
            this.currentPage++;
        },
        touchBottom(){
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

