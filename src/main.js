// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
Vue.use(VueAxios, axios)
Vue.use(qs);


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import config from './config/config'
import store from "./store/store";
import router from './router/router'

Vue.config.productionTip = false
Vue.prototype.config = config;
Vue.prototype.store = store;

Vue.axios.defaults.withCredentials = true
// Vue.axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.axios.defaults.headers['Content-Type'] = 'application/json'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
