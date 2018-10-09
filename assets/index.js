import Vue from 'vue/dist/vue.esm';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Header from './components/layouts/header.vue';
import Index from './components/web/index.vue';
import Paginate from 'vuejs-paginate';

Vue.component('paginate', Paginate);
Vue.use(Bootstrap)

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    components: {
        'nav-bar': Header,
        'index-pages': Index
    },
})