import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV);
// import Home from '../views/Home.vue'
console.log('./_import_' + process.env.NODE_ENV,'8888')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => _import('home/index')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => _import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
