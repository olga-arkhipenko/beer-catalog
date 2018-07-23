import Vue from 'vue';
import store from 'store/index';
import router from './routing/router';
import App from './App';

new Vue({
    el: '#app',
    components: {
        App
    },
    store,
    router,
    template: '<app/>'
});
