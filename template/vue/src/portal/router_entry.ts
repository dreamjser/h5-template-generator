import { createRouter, createWebHistory } from 'vue-router'
import routes from '@tmp/routers'
import { ROOT_REDIRECT } from '@/common/utils/constant'
import { isQiankun, micoAppName } from './micoApp'

const homeRoutes = [
  {
    name: 'home',
    path: '/',
    children: routes,
    redirect: ROOT_REDIRECT,
    meta: {
      title: '首页',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(isQiankun? `/${micoAppName}`: '/'),
  routes: homeRoutes as any,
})

export default router
