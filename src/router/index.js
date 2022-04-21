import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
// const modules = import.meta.glob("../views/**/**.vue")
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: modules[`../views/About.vue`],
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: import.meta.env.BASE_URL,
  routes
})
console.log(31,import.meta.env.BASE_URL)
console.log(32,import.meta.env.VITE_API_URL)
export default router
