import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/acerca',
      name: 'acerca',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
