import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { h } from 'vue'
import HomeView from '../views/HomeView.vue'
import WorkSpace from '../views/WorkSpace/index.vue'
import HomePageWorkSpace from '../views/WorkSpace/homepage/index.vue'
import Product from '../views/WorkSpace/product/index.vue'
import TemplateWorkSpace from '../views/WorkSpace/template/index.vue'
import FavoritesWorkSpace from '../views/WorkSpace/favorites/index.vue'
import RecycleWorkSpace from '../views/WorkSpace/recycle/index.vue'

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
      component: WorkSpace,

      children: [    {
        path: '', 
        name: '',
        component: { render: () => h(RouterView) }, // 嵌套路由视图
        meta: {
          title: '主页'
        },
        children: [    {
          path: '', 
          name: '',
          component: HomePageWorkSpace,
          meta: {
            title: '主页'
          }
        },  {
          path: 'product', 
          name: 'product',
          component: Product,
          meta: {
            title: '我的'
          }
        },
        {
          path: 'template', 
          name: 'template',
          component: TemplateWorkSpace,
          meta: {
            title: '模版'
          }
        },
        {
          path: 'favorites', 
          name: 'favorites',
          component: FavoritesWorkSpace,
          meta: {
            title: '收藏'
          }
        },{
          path: 'recycle', 
          name: 'recycle',
          component: RecycleWorkSpace,
          meta: {
            title: '回收站'
          }
        }]
      }
    ]},
    {
      path: '/:id/form-editor',
      name: 'form-editor',
      component: () => import('../views/FormEditor/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/register.vue')
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('../views/Auth/reset.vue')
    }
  ]
})

export default router
