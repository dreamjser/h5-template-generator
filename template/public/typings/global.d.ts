import {  AllType } from '@dreamjser/request-axios'
import { AlertProps, ConfirmProps, ToastProps } from '@/common/app/interface'

type GLOBAL_CONFIG = {
  BASE_URL: string
  NODE_ENV: string
}

interface InterfaceType {
  alert: (opts: AlertProps) => Promise<void>
  confirm: (opts: ConfirmProps) => Promise<void>
  toast: (opts: ToastProps) => Promise<void>
}

type IApp = {
  request: (opts: AllType) => any
  interface: InterfaceType
  [propName: string]: any
}

declare global {
  let App: IApp
  let GLOBAL_CONFIG: GLOBAL_CONFIG
  interface Window {
    [propName: string]: any
  }
}


