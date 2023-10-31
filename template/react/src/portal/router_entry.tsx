import React, { FC, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import children from '@tmp/routers'

const App = lazy(() => import('@/portal/app'))
const lazyComponent = (Component: FC) => (
  <Suspense fallback={<></>}>
    <Component />
  </Suspense>
)

const Entry = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={lazyComponent(App)}>
        {children.map((child: any) => (
          <Route
            key={child.path}
            path={child.path}
            element={lazyComponent(child.component)}
          />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Entry
