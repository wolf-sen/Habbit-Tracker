import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cookies from 'js-cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userCookie = Cookies.get('user')

  if (!userCookie && to.path !== '/login' && to.path !== '/register') {
    return next('/login')
  }

  next()
})

export default router
