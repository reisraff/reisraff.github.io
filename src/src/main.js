import Vue from 'vue'

import router from './router'

import App from './App'

import localStorage from './provider/localStorage'
import lang from './provider/lang'

Vue.use(localStorage)
Vue.use(lang)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  localStorage,
  lang,
  template: '<App/>',
  components: { App }
})
