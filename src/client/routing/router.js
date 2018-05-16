import Vue from 'vue';
import VueRouter from 'vue-router';
import mainMenuRoutes from './routes/mainMenu';
import beerInfoRoute from './routes/beerInfo';
import registration from './routes/registration';

Vue.use(VueRouter);

const routes = mainMenuRoutes
    .concat(
        beerInfoRoute,
        registration
    );

export default new VueRouter({
    routes,
    mode: 'history'
});
