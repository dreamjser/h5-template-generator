import LoadingToast from '@dreamjser/h5-loading-toast'

const loading = new LoadingToast()

let loadingCount = 0

export const showLoading = () => {
  loadingCount++
  loading.show()
}

export const hideLoading = () => {
  loadingCount--
  if (loadingCount <= 0) {
    loading.hide()
  }
}
