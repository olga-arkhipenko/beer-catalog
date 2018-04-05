<template>
    <section class="beerInfo">
        <h1>{{ beer.name }}</h1>
    </section>
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: mapState('beerInfo', ['beer']),
    mounted() {
        this.loadBeer(this.id);
    },
    beforeDestroy() {
        this.resetBeer();
    },
    methods: {
        ...mapActions('beerInfo', ['loadBeer', 'resetBeer'])
    }
};
</script>

<style>
.beerInfo {
    margin: 150px 0 0;
}
</style>

