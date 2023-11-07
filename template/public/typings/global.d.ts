import {  AllType } from '@dreamjser/request-axios'
import { AlertProps, ConfirmProps, ToastProps } from '@/common/app/interface'
import {RouterProps} from '@/common/router'

type GLOBAL_CONFIG = {
  BASE_URL: string
  NODE_ENV: string
}

interface InterfaceType {
  alert: (opts: AlertProps) => Promise<void>
  confirm: (opts: ConfirmProps) => Promise<void>
  toast: (opts: ToastProps) => Promise<void>
}

interface RouterType {
  push: (pathname: string, opts?: RouterProps) => void,
  pop: (index?: number) => void
}

type IApp = {
  request: (opts: AllType) => Promise<void>
  interface: InterfaceType
  router: RouterType
  [propName: string]: any
}

declare global {
  let App: IApp
  let GLOBAL_CONFIG: GLOBAL_CONFIG
  interface Window {
    [propName: string]: any
  }
}


