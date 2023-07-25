import {  AllType } from '@dreamjser/request-axios'

type GLOBAL_CONFIG = {
  BASE_URL: string
  NODE_ENV: string
}

type IApp = {
  request: (opts: AllType) => any
  [propName: string]: any
}

declare global {
  let App: IApp
  let GLOBAL_CONFIG: GLOBAL_CONFIG
  interface Window {
    [propName: string]: any
  }
}


