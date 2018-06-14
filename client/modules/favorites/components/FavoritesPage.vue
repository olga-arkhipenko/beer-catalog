<template>
    <article class="page">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <row-list :items="favoriteBeers">
            <template slot-scope="props">
                <favorites-card
                    :beer="props.item"
                    @favoriteBeerRemoved="deleteFavoriteBeer"/>
            </template>
        </row-list>
        <pagination
            :current-page="pageParams.pageNumber"
            :total-pages="amountOfPages"
            :items-per-page="pageParams.itemsPerPage"
            class="favorites__pagination"
            @pageChanged="changePage"/>
    </article>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Pagination from 'common/components/other/Pagination';
import RowList from 'common/components/lists/RowList';
import FavoritesCard from './FavoritesCard';

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => vm.$store.dispatch('userData/getCurrentUserData'));
    },
    components: {
        RowList,
        FavoritesCard,
        Pagination
    },
    data() {
        return {
            pageParams: {
                pageNumber: 1,
                itemsPerPage: 5
            }
        };
    },
    computed: {
        ...mapState('favorites', ['favoriteBeers', 'amountOfPages'])
    },
    mounted() {
        this.loadFavoriteBeers(this.pageParams);
    },
    beforeDestroy() {
        this.resetFavorites();
    },
    methods: {
        ...mapActions('favorites', ['loadFavoriteBeers', 'removeFavoriteBeerWithReload', 'resetBeers']),

        changePage(pageNumber) {
            this.pageParams.pageNumber = pageNumber;
            this.loadFavoriteBeers(this.pageParams);
        },
        resetPage() {
            this.pageParams.pageNumber = 1;
        },
        deleteFavoriteBeer(favoriteBeerId) {
            this.removeFavoriteBeerWithReload({
                beerId: favoriteBeerId, requestParams: this.pageParams
            });
        },
        resetFavorites() {
            this.resetBeers();
            this.resetPage();
        }
    }
};
</script>

<style>
.favorites__heading {
    margin: 30px 0;

    text-align: center;

    font-family: "Courier New", Courier, monospace;
    font-size: 2rem;
}
</style>

