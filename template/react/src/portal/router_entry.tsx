import React, { FC, Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import children from '@tmp/routers'
import { isQiankun, micoAppName } from './micoApp'
const App = lazy(() => import('@/portal/app'))
const Login = lazy(() => import('@/portal/login'))

const lazyComponent = (Component: FC) => (
  <Suspense fallback={<></>}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter(
  [
    {
      path: '/*',
      element: lazyComponent(App),
    },
    {
      path: '/',
      element: lazyComponent(App),
      children: children.map((child: any) => ({
        path: child.path,
        element: lazyComponent(child.component),
      })),
    },
    {
      path: '/login',
      element: lazyComponent(Login),
    },
  ],
  {
    basename: isQiankun ? `/${micoAppName}` : '/',
  },
)

export default router
