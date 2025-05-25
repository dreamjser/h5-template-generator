import '@/common/styles/app.less'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router_entry'
import store from '@/common/store'
import '@/common/app'
import './mainApp'
import { isQiankun } from './micoApp'

const root = createRoot(document.getElementById('app') as HTMLElement)

function render() {
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

if (!isQiankun) {
  render()
}
