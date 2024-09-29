import '@/common/styles/app.less'
import 'vant/lib/index.css'
import './public_path'
import '@/common/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Render from './app'
import router from './router_entry'
import { isQiankun } from './micoApp'

const pinia = createPinia()
//vue实例化
const vm = createApp(Render as any)

vm.use(pinia)
vm.use(router)

function render() {
  vm.mount('#mico_app')
}

if(!isQiankun) {
  render()
}

App.vm = vm

export async function bootstrap() {
  console.log("mico_app bootstraped 加载");
}

export async function mount(props: any) {
  console.log("mico_app mount 加载，主应用 prop: ", props);
  render()
}

export async function unmount(_props: any) {
  console.log("mico_app unmount 卸载", _props);
  vm.unmount()
}



