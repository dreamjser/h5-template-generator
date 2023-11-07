import { createRouter, createWebHistory } from 'vue-router'
import routes from '@tmp/routers'
import { ROOT_REDIRECT } from '@/common/utils/constant'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: homeRoutes as any,
  // routes: [...homeRoutes, ...routes],
})

export default router
