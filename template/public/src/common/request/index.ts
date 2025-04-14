import {
  HttpClient,
  RequestConfig,
  ResponseConfig,
} from '@dreamjser/http-client'
import { showLoading, hideLoading } from './loading'

interface CustomRequestConfig extends RequestConfig {
  loading?: boolean
  hasOwnError?: boolean
}

const client = new HttpClient({
  baseURL: GLOBAL_CONFIG.BASE_URL,
  timeout: 5000,
  withCredentials: true,
})

client.useRequestInterceptor({
  onRequest: (config: CustomRequestConfig) => {
    const conf = {
      loading: true,
      hasOwnError: false,
      ...config,
    }

    if (conf.loading) {
      showLoading()
    }

    return conf
  },
})

client.useResponseInterceptor({
  onResponse: (responseConfig: ResponseConfig) => {
    const { config, response, resolve } = responseConfig
    const { data } = (response as Record<string, any>).data || {}

    if ((config as CustomRequestConfig).loading) {
      setTimeout(hideLoading, 50)
    }

    resolve(data)
    return data
  },
  onResponseError: (error: Error) => {
    App.interface.toast('网络请求失败')
    setTimeout(hideLoading, 50)
    return error
  },
})

export default (config: CustomRequestConfig) => {
  return client.request(config)
}
