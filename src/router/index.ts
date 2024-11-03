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
      path: '/workspace',
      name: 'workspace',
      component: () => import('../views/WorkSpace/index.vue')
    },
    {
      path: '/:id/form-editor',
      name: 'form-editor',
      component: () => import('../views/FormEditor/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
