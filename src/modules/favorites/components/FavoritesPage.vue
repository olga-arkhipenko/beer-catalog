<template>
    <article class="favorites">
        <h1 class="favorites__heading">Your favorite beers</h1>
        <row-list :items="favoriteBeers">
            <template scope="props">
                <favorites-card
                    :beer="props.item"
                    @favoriteBeerRemoved="deleteFavoriteBeer"
                />
            </template>
        </row-list>
        <pagination
            :current-page="favoritesParams.pageNumber"
            :total-items="favoriteBeerIds.length"
            :items-per-page="favoritesParams.itemsPerPage"
            @pageChanged="changePage"
        />
    </article>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Pagination from 'common/components/other/Pagination';
import RowList from 'common/components/lists/RowList';
import FavoritesCard from './FavoritesCard';

export default {
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
        ...mapState('favorites', ['favoriteBeers']),
        ...mapState('favorites/favoritesManagement', ['favoriteBeerIds']),
        favoritesParams() {
            return { ...this.pageParams, beerIds: this.favoriteBeerIds };
        }
    },
    mounted() {
        this.loadFavoriteBeerIds();
        this.loadFavoriteBeers(this.favoritesParams);
    },
    beforeDestroy() {
        this.resetPage();
    },
    methods: {
        ...mapActions('favorites', ['loadFavoriteBeers', 'removeFavoriteBeer']),
        ...mapActions('favorites/favoritesManagement', ['loadFavoriteBeerIds']),
        changePage(pageNumber) {
            this.pageParams.pageNumber = pageNumber;
            this.loadFavoriteBeers(this.favoritesParams);
        },
        resetPage() {
            this.pageParams.pageNumber = 1;
        },
        deleteFavoriteBeer(favoriteBeerId) {
            this.removeFavoriteBeer({ id: favoriteBeerId, requestParams: this.pageParams });
        }
    }
};
</script>

<style>
.favorites {
    width: 1024px;
    margin: 140px auto;
}
.favorites__heading {
    margin: 30px 0;

    text-align: center;

    font-family: "Courier New", Courier, monospace;
    font-size: 2rem;
}
</style>

