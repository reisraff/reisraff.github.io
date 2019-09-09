import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('containers/index/index.vue')
const Home = () => import('containers/home/home.vue')
const NotFound = () => import('containers/notFound/notFound.vue')

// application routes
const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/home', name: 'home', component: Home },
  { path: '*', name: 'notFound', component: NotFound }
]

// export router instance
export default new Router({
  base: process.env.NODE_ENV === 'development' ? '/' : '/me/',
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
