import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store/store'
import App from './App';
import Catalog from './components/catalog/Catalog';
import Favorites from './components/favorites/Favorites';

Vue.use(VueRouter);

const routes = [
    {
        path: '/', 
        component: Catalog
    },
    {
        path: '/favorites', 
        component: Favorites
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})