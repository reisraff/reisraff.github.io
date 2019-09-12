import Vue from 'vue'

import router from './router'

import App from './App'

import VueAnalytics from 'vue-analytics'

import localStorage from './provider/localStorage'
import lang from './provider/lang'

Vue.use(localStorage)
Vue.use(lang)

Vue.use(VueAnalytics, {
  id: 'UA-73718792-1',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  localStorage,
  lang,
  template: '<App/>',
  components: { App }
})
