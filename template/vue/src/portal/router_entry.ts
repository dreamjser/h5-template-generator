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
      needLogin: false,
      checkCard: false,
      checkTransfer: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: homeRoutes,
  // routes: [...homeRoutes, ...routes],
})

export default router
