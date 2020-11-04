import Vue from 'vue'
import router from './router'

import App from './App'

import VueGtag from 'vue-gtag'
import VueDisqus from 'vue-disqus'

import localStorage from './provider/localStorage'
import lang from './provider/lang'
import head from './provider/head'

Vue.use(VueDisqus)
Vue.use(localStorage)
Vue.use(lang)
Vue.use(head)

Vue.use(VueGtag, {
  config: { id: 'G-ZHQ9NV0LFW' }
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
