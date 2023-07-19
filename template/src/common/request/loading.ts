import { Toast } from 'antd-mobile'

let loadingCount = 0

export const showLoading = () => {
  loadingCount++
  Toast.show({
    duration: 0,
    icon: 'loading',
    content: '加载中…',
  })
}

export const hideLoading = () => {
  loadingCount--
  if (loadingCount <= 0) {
    Toast.clear()
  }
}
