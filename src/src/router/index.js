import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('container/index/index.vue')
const Home = () => import('container/home/home.vue')
const NotFound = () => import('container/notFound/notFound.vue')

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
