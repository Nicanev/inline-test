import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue')
    },
    {
      path: '/where',
      name: 'where',
      component: () => import('../views/WhereView.vue')
    }
  ]
})

export default router
