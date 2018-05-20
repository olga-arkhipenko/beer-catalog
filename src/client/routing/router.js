import Vue from 'vue';
import VueRouter from 'vue-router';
import mainMenuRoutes from './routes/mainMenu';
import beerInfo from './routes/beerInfo';
import registration from './routes/registration';
import login from './routes/login';

Vue.use(VueRouter);

const routes = mainMenuRoutes
    .concat(
        beerInfo,
        registration,
        login
    );

export default new VueRouter({
    routes,
    mode: 'history'
});
