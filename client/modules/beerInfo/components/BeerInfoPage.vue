<template>
    <article
        v-if="isLoaded"
        class="beer-info">
        <img
            :src="beer.image"
            alt="Beer pic"
            class="beer-info__image">
        <h1
            v-cloak
            class="beer-info__heading">{{ beer.name }}
        </h1>
        <p
            v-cloak
            class="beer-info__tag">{{ beer.tagline }}
        </p>
        <button
            v-if="beer.isFavorite"
            class="beer-info__button action-button"
            @click="submitRemoveFavoriteBeer(beer.id)">
            remove favorite
        </button>
        <button
            v-else
            class="beer-info__button action-button"
            @click="submitAddFavoriteBeer(beer.id)">
            add favorite
        </button>
        <p class="beer-info__description">
            {{ beer.description }}
        </p>
        <properties :beer="beer"/>
        <food-pairing :food-pairing="beer.foodPairing"/>
        <div class="clearfix"/>
        <brewing :brewing="beer.brewing"/>
    </article>
    <spinner
        v-else
        class="beer-info__spinner"/>
</template>


<script>
import { mapState, mapActions } from 'vuex';
import actionTypes from 'beerInfoModule/store/actions/constants';
import stateTypes from 'beerInfoModule/store/state/constants';
import Spinner from 'common/components/other/Spinner';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import configs from 'common/helpers/notification/configs';
import Properties from './Properties';
import FoodPairing from './FoodPairing';
import Brewing from './Brewing';

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => vm.$store.dispatch('getCurrentUserData'));
    },
    components: {
        Properties,
        FoodPairing,
        Brewing,
        Spinner
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState({
            beer: state => state.beerInfo[stateTypes.BEER]
        }),

        isLoaded() {
            return Object.keys(this.beer).length;
        }
    },
    mounted() {
        this.loadBeer(this.id);
    },
    beforeDestroy() {
        this.resetBeer();
    },
    methods: {
        ...mapActions({
            loadBeer: actionTypes.LOAD_BEER,
            resetBeer: actionTypes.RESET_BEER,
            addFavoriteBeer: actionTypes.ADD_FAVORITE_BEER,
            removeFavoriteBeer: actionTypes.REMOVE_FAVORITE_BEER
        }),

        submitAddFavoriteBeer(beerId) {
            const promise = this.addFavoriteBeer(beerId);
            notificationHelper.showNotification(promise, configs.authorization);
        },
        submitRemoveFavoriteBeer(beerId) {
            const promise = this.removeFavoriteBeer(beerId);
            notificationHelper.showNotification(promise, configs.authorization);
        }
    }
};
</script>

<style>
.beer-info {
    position: relative;

    width: 1240px;
    margin: 120px auto 0;

    font-family: "Courier New", Courier, monospace;
}

.beer-info__heading {
    color: #31374c;
}

.beer-info__image {
    float: right;

    height: 300px;
    margin: 20px;
}

.beer-info__button {
    padding: 10px 20px;

    text-transform: uppercase;

    color: #ffffff;
    background-color: #464c67;

    font-size: 1.3rem;
}

.beer-info__spinner {
    position: fixed;
    top: 300px;
    left: 50%;

    width: 100%;
}
</style>

