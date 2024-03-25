import {
  getGlobalAxios,
  getAxios,
  AllType,
  OptionsGlobalType,
} from '@dreamjser/request-axios'
import { showLoading, hideLoading } from './loading'

const globalOpts: OptionsGlobalType = {
  timeout: 30000,
  baseURL: GLOBAL_CONFIG.BASE_URL,
}
const axiosInstance = getGlobalAxios(globalOpts)

const requestHook = (config: AllType) => {
  !config.slient && showLoading()
}

const responseHook = (reslove: any, reject: any, res: any) => {
  const { config, data } = res
  const { errorCode, errorMsg } = data

  !config.slient && setTimeout(hideLoading, 100)

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

  reslove(data.data)
}

const request = (opts: AllType) => {
  opts.requestHook = requestHook
  opts.responseHook = responseHook
  return new Promise((reslove, reject) => {
    getAxios(opts, axiosInstance)
      .then(reslove)
      .catch(({ config, error }: any) => {
        !config.slient && setTimeout(hideLoading, 100)
        if (config.publicError) {
          App.interface.toast(error.message || '请求失败')
        } else {
          reject({
            errorMsg: error.message,
          })
        }
      })
  })
}

export default request
