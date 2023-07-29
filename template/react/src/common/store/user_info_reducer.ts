import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    info: {} as any,
  },
  reducers: {
    getUserInfo: (state: any) => {
      state.info = { name: 'syg' }
    },
  },
})
export const { getUserInfo } = userInfoSlice.actions

export default userInfoSlice.reducer
