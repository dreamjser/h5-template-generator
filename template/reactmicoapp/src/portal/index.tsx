import '@/common/styles/app.less'
import './public_path'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router_entry'
import store from '@/common/store'
import '@/common/app'
import { isQiankun } from './micoApp'

const root = createRoot(document.getElementById('mico_app') as HTMLElement)

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

export async function bootstrap() {
  console.log('app1 bootstraped 加载')
}

export async function mount(props: any) {
  console.log('app2 mount 加载，主应用 prop: ', props)
  render()
}

// lifecycle => 卸载
export async function unmount(_props: any) {
  console.log('app1 unmount 卸载', _props)
  root.unmount()
}
