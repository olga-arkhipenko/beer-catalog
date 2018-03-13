<template>
    <article>
        <search-panel v-on:loadBeers="loadBeers"></search-panel>
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
            // urlParams: {
            //     page: 1,
            //     per_page: 9
            // }
        }
    },
    components: {
        'search-panel': SearchPanel
    },
    mounted() {
        // if(this.$store.state.beers.length === 0 && this.$store.state.urlParams.page === 1) {
            this.loadBeers();
        // }
    },
    created() {
        window.addEventListener('scroll', () => {
            if(this.isBottom()) {
                this.$store.commit('INCREMENT_CATALOG_PAGE');
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
        loadBeers(searchParams){
            console.log('page '+this.$store.state.urlParams.page);
            console.log('searchParams '+searchParams);
            this.$store.commit('SET_SEARCH_PARAMS', searchParams)
            this.$store.dispatch('getBeerPage');
        },
        // incrementPageNumber() {
        //     this.urlParams.page++;
        // },
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

