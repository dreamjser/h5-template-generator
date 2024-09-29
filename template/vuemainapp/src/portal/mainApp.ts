import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'micoApp',
    entry: '//localhost:3003',
    container: '#mico_view',
    activeRule: '/micoApp/',
  },
])

start({ sandbox: { experimentalStyleIsolation: true } })
