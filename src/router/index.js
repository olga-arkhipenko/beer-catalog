import Vue from 'vue';
import VueRouter from 'vue-router';
import mainMenuRoutes from './mainMenuRoutes';

Vue.use(VueRouter);

export default new VueRouter({
    mainMenuRoutes,
    mode: 'history'
});
