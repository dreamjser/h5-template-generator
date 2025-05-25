import '@/common/styles/app.less'
import 'vant/lib/index.css'
import '@/common/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Render from './app'
import router from './router_entry'
import './mainApp'
import { isQiankun } from './micoApp'

const pinia = createPinia()
//vue实例化
const vm = createApp(Render as any)

vm.use(pinia)
vm.use(router)

function render() {
  vm.mount('#app')
}

if(!isQiankun) {
  render()
}

App.vm = vm




