import Vue from 'vue'
import Router from 'vue-router'
import localStorage from '../provider/localStorage'

Vue.use(localStorage)

const Index = () => import('container/index/index.vue')
const Home = () => import('container/home/home.vue')
const NotFound = () => import('container/notFound/notFound.vue')

// application routes
const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/:lang/home', name: 'home', component: Home },
  { path: '*', name: 'notFound', component: NotFound }
]

const router = new Router({
  base: process.env.NODE_ENV === 'development' ? '/' : '/me/',
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  if (typeof to.params.lang !== 'undefined') {
    Vue.prototype.$localStorage.set('language', to.params.lang)
  }

  next()
})

Vue.use(Router)

// export router instance
export default router
