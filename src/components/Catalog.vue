<template>
    <article>
        <search-panel></search-panel>
        <section class="catalog">
        <div v-for="beer in beers">
            <div class="beerCard__image">
                <img :src="beer.image" alt="Beer pic" width="50px">
            </div>
            <h2>{{beer.name}}</h2>
            <h3>{{beer.tagline}}</h3>
        </div>
    </section>
    </article>
</template>

<script>
import SearchPanel from './SearchPanel';

export default {
    data() {
        return {
            pageNumber: 1
        }
    },
    components: {
        'search-panel': SearchPanel
    },
    created() {
        if(this.$store.state.beers.length === 0) {
            this.loadBeers();
        }
        window.addEventListener('scroll', () => {
            if(this.isBottom()) {
                this.incrementPageNumber();
                this.loadBeers();
            }
        })
    },
    computed: {
        beers() {
            return this.$store.getters.getBeersForCatalog;
        }
    },
    methods: {
        loadBeers(){
            console.log('page'+this.pageNumber);
            this.$store.dispatch('getBeerPage', {page: this.pageNumber});
        },
        incrementPageNumber() {
            this.pageNumber++;
        },
        isBottom(){
            const scrollY = window.scrollY
            const visibleContent = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const pageBottom = visibleContent + scrollY >= pageHeight
            return pageBottom || pageHeight < visibleContent
        }
    }
  
}
</script>

<style>
    .catalog {
        width: 1024px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: 33.333% 33.333% 33.333%;
        grid-column-gap: 20px;
    }

    .beerCard__image {
        height: 200px;
    }
</style>

