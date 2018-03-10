import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Catalog from './components/Catalog';
import Favorites from './components/Favorites';

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
    router,
    render: h => h(App)
})