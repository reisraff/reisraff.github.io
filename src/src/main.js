import Vue from 'vue'
import router from './router'

import App from './App'

import VueAnalytics from 'vue-analytics'
import VueDisqus from 'vue-disqus'

import localStorage from './provider/localStorage'
import lang from './provider/lang'
import head from './provider/head'

Vue.use(VueDisqus)
Vue.use(localStorage)
Vue.use(lang)
Vue.use(head)

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
  head,
  template: '<App/>',
  components: { App }
})
