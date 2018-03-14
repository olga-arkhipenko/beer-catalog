<template>
    <article>
        <search-panel v-on:loadBeers="loadBeers"/>
        <section class="catalog">
            <!-- <beer-card 
                v-for="beer in beers"
                :id="beer.id"
                :image="beer.image"
                :name="beer.name"
                :tagLine="beer.tagLine"
                :key="beer.id"
            /> -->
        <div v-for="beer in beers">
            <div class="beerCard__image">
                <img :src="beer.image" alt="Beer pic" width="50px">
            </div>
            <h2>{{beer.name}}</h2>
            <h3>{{beer.tagline}}</h3>
            <button class="">open</button>
            <button class="" @click="addFavoriteBeer($event, beer.id)" v-if="isAddFavoriteButtonShown">add to favorite</button>
        </div>
    </section>
    <catalog-spinner v-if="isLoading"/>
    </article>
</template>

<script>
import SearchPanel from './SearchPanel';
import BeerCard from './BeerCard';
import Spinner from './Spinner';

export default {
    data() {
        return {
            isAddFavoriteButtonShown: true
        }
    },
    components: {
        'beer-card': BeerCard,
        'search-panel': SearchPanel,
        'catalog-spinner': Spinner
    },
    mounted() {
        this.loadBeers();
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
        },
        isLoading() {
            return this.$store.state.isLoading;
        }
    },
    methods: {
        loadBeers(){
            this.$store.dispatch('getBeerPage');
            console.log('page '+this.$store.state.catalogParams.page);
            console.log('searchParams '+this.$store.state.searchParams);
        },
        isBottom(){
            const scrollY = window.scrollY;
            const visibleContent = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const pageBottom = visibleContent + scrollY >= pageHeight;
            return pageBottom || pageHeight < visibleContent;
        },
        hideAddFavoriteButton() {
            this.isAddFavoriteButtonShown = false;
        },
        addFavoriteBeer(event, beerId) {
            this.$store.commit('ADD_FAVORITE', beerId);
            this.hideAddFavoriteButton();
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
        grid-row-gap: 20px;
    }
</style>

