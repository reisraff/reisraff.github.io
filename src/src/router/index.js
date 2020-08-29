import Vue from 'vue'
import Router from 'vue-router'
import localStorage from '../provider/localStorage'

Vue.use(localStorage)

const Index = () => import('container/index/index.vue')
const Home = () => import('container/home/home.vue')
const Posts = () => import('container/posts/posts.vue')
const ByteOff = () => import('container/byte-off/byte-off.vue')
const Post = () => import('container/post/post.vue')
const NotFound = () => import('container/notFound/notFound.vue')

// application routes
const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/:lang/home', name: 'home', component: Home },
  { path: '/:lang/post/:postId', name: 'post', component: Post },
  { path: '/:lang/posts', name: 'posts', component: Posts },
  { path: '/:lang/byte-off', name: 'byte-off', component: ByteOff },
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

  let firstOpen = parseInt(Vue.prototype.$localStorage.get('firstOpen', '1'))

  if (firstOpen && to.name !== 'index') {
    Vue.prototype.$localStorage.set('next', JSON.stringify(to))
    router.replace({ name: 'index' })
    return
  }

  let _to = Vue.prototype.$localStorage.get('next', null)

  if (!firstOpen && _to) {
    Vue.prototype.$localStorage.remove('next')
    _to = JSON.parse(_to)
    router.replace(_to)
    return
  }

  window.scrollTo(0, 0)

  next()
})

Vue.use(Router)

// export router instance
export default router
