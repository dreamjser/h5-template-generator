import { getGlobalAxios, getAxios, AllType } from '@dreamjser/request-axios'
import { showLoading, hideLoading } from './loading'

const axiosInstance = getGlobalAxios({
  timeout: 30000,
  baseURL: GLOBAL_CONFIG.BASE_URL,
})

const requestHook = (config: any) => {
  !config.slient && showLoading()
}

const responseHook = (reslove: any, reject: any, res: any) => {
  const { config, data } = res
  const { errorCode, errorMsg } = data

  !config.slint && setTimeout(hideLoading, 100)

  if (errorCode !== '0') {
    if (config.publicError) {
      App.interface.toast(errorMsg)
    } else {
      reject({
        errorCode,
        errorMsg,
      })
    }
    return
  }

  reslove(data)
}

const request = (opts: AllType) => {
  opts.requestHook = requestHook
  opts.responseHook = responseHook
  return getAxios(opts, axiosInstance).catch(() => {
    App.interface.toast('网络请求失败')
  })
}

export default request
