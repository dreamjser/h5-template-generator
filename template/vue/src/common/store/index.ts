import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    userInfo: null as any,
  }),
  actions: {
    getUserInfo() {
      this.userInfo = { name: 'syg'}
    }
  },
})
