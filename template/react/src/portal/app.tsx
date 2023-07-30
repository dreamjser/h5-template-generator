import React, { FC, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import children from '@tmp/routers'
import { ROOT_REDIRECT } from '@/common/utils/constant'

const lazyComponent = (Component: FC) => (
  <Suspense fallback={<></>}>
    <Component />
  </Suspense>
)

const Entry = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Navigate to={ROOT_REDIRECT} />} />
      {children.map((child: any) => (
        <Route
          key={child.path}
          path={child.path}
          element={lazyComponent(child.component)}
        />
      ))}
    </Routes>
  </HashRouter>
)

export default Entry