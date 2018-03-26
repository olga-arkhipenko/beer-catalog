import Vue from 'vue';
import store from './store/index';
import router from './router/index';
import App from './App';

new Vue({
    el: '#app',
    store,
    router,
    template: '<beer-catalog-app/>',
    components: {
        'beer-catalog-app': App
    }
})