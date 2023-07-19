import React, { FC, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import children from '@tmp/routers'

const lazyComponent = (Component: FC) => (
  <Suspense fallback={<></>}>
    <Component />
  </Suspense>
)

const Entry = () => (
  <HashRouter>
    <Routes>
      <Route path="/">
        {children.map((child: any) => (
          <Route
            key={child.path}
            path={child.path}
            element={lazyComponent(child.component)}
          />
        ))}
      </Route>
    </Routes>
  </HashRouter>
)

export default Entry
