// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import './assets/element-variables.scss'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false
FastClick.attach(document.body);
import axios from 'axios'
Vue.prototype.axios = axios;
axios.defaults.baseURL = "http://localhost:8080/"
// axios.defaults.baseURL = "http://10.2.98.231:8012"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
