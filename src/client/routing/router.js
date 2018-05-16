import Vue from 'vue';
import VueRouter from 'vue-router';
import mainMenuRoutes from './routes/mainMenu';
import beerInfoRoute from './routes/beerInfo';
import registration from './routes/registration';
import login from './routes/login';

Vue.use(VueRouter);

const routes = mainMenuRoutes
    .concat(
        beerInfoRoute,
        registration,
        login
    );

export default new VueRouter({
    routes,
    mode: 'history'
});
