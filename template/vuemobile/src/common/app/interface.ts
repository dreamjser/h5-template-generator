import {
  showDialog,
  showConfirmDialog,
  DialogOptions,
  showToast,
  ToastOptions,
} from 'vant'

export type AlertProps = string | DialogOptions

export const alert = (opts: AlertProps) => {
  if (typeof opts === 'string') {
    return showDialog({
      confirmButtonText: '确定',
      message: opts,
    })
  } else {
    return showDialog(opts)
  }
}

export type ConfirmProps = string | DialogOptions

export const confirm = (opts: ConfirmProps) => {
  if (typeof opts === 'string') {
    return showConfirmDialog({
      confirmButtonText: '确定',
      message: opts,
    })
  } else {
    return showConfirmDialog(opts)
  }
}

type ToastContentOption = {
  content?: string
}

export type ToastProps = string | (ToastOptions & ToastContentOption)

export const toast = (opts: ToastProps) => {
  if(typeof opts !== 'string') {
    opts.message = opts.content || opts.message
  }
  showToast(opts)
}

export default {
  alert,
  confirm,
  toast,
}
