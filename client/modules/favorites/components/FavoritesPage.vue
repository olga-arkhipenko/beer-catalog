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
import notificationHelper from 'common/helpers/notification/notificationHelper';
import configs from 'common/helpers/notification/configs';
import actionTypes from 'favoritesModule/store/actions/constants';
import stateTypes from 'favoritesModule/store/state/constants';
import userDataActionTypes from 'userModule/store/actions/constants';
import FavoritesCard from './FavoritesCard';

export default {
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            const promise = vm.$store.dispatch(userDataActionTypes.GET_CURRENT_USER_DATA);
            notificationHelper.showNotification(promise);
        });
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
        ...mapState({
            favoriteBeers: state => state.favorites[stateTypes.FAVORITE_BEERS],
            amountOfPages: state => state.favorites[stateTypes.AMOUNT_OF_PAGES]
        })
    },
    mounted() {
        const promise = this.loadFavoriteBeers(this.pageParams);
        notificationHelper.showNotification(promise, configs.beersLoading);
    },
    beforeDestroy() {
        this.resetFavorites();
    },
    methods: {
        ...mapActions({
            loadFavoriteBeers: actionTypes.LOAD_FAVORITE_BEERS,
            removeFavoriteBeerWithReload: actionTypes.REMOVE_FAVORITE_BEER_WITH_RELOAD,
            resetBeers: actionTypes.RESET_BEERS
        }),

        changePage(pageNumber) {
            this.pageParams.pageNumber = pageNumber;
            const promise = this.loadFavoriteBeers(this.pageParams);
            notificationHelper.showNotification(promise, configs.beersLoading);
        },
        resetPage() {
            this.pageParams.pageNumber = 1;
        },
        deleteFavoriteBeer(favoriteBeerId) {
            const promise = this.removeFavoriteBeerWithReload({
                beerId: favoriteBeerId, requestParams: this.pageParams
            });
            notificationHelper.showNotification(promise, configs.authorization);
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

