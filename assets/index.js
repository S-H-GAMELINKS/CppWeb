import Vue from 'vue/dist/vue.esm';
import * as  Bootstrap from 'bootstrap-umi';
import 'bootstrap-umi/dist/css/bootstrap.css';

Vue.use(Bootstrap)

const app = new Vue({
    el: '#app',
    data: function() {
        return {
            message: "Hello!"
        }
    }
})