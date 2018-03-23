import Vue from 'vue';
import {store} from './store/store';
import router from './router/index';
import App from './App';



new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})