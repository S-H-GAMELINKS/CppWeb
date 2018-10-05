import Vue from 'vue/dist/vue.esm';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';
import Header from './components/layouts/header.vue';
import Index from './components/web/index.vue';
import Paginate from 'vuejs-paginate';

Vue.component('paginate', Paginate);
Vue.use(Bootstrap)

const app = new Vue({
    el: '#app',
    components: {
        'nav-bar': Header,
        'index-pages': Index
    },
})