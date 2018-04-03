import Vue from 'vue';
import VueRouter from 'vue-router';
import mainMenuRoutes from './mainMenuRoutes';
import beerInfoRoute from './beerInfoRoute';

Vue.use(VueRouter);

const routes = mainMenuRoutes.concat(beerInfoRoute);

export default new VueRouter({
    routes,
    mode: 'history'
});
