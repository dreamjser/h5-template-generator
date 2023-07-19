import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './user_info_reducer'

export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
})
