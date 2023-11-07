import '@/common/styles/app.less'
import 'vant/lib/index.css'
import '@/common/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Render from './app'
import router from './router_entry'

const pinia = createPinia()
//vue实例化
const vm = createApp(Render as any)

vm.use(pinia)
vm.use(router)

vm.mount('#app')

App.vm = vm
