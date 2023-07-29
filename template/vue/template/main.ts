import '@/common/styles/app.less'
import '@/common/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Render from './app'

const pinia = createPinia()
const vm = createApp(Render)

vm.use(pinia)
vm.mount('#app')

app.vm = vm
