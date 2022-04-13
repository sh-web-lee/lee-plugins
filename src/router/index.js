import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About/AboutView.vue')
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: () => import('../views/DataShow/Caousel/')
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: () => import('../views/Navigation/Dropdown')
  },
  {
    path: '/selectorpage',
    name: 'SelectorPage',
    component: () => import('../views/DataShow/SearchMenu/')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
