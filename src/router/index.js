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
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/stats',
      name: 'statistics',
      component: () => import('../views/StatsView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalView.vue')
    }
  ]
})

export default router
