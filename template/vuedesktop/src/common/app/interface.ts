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

export type ToastProps = string | ToastOptions

export const toast = (opts: ToastProps) => {
  showToast(opts)
}

export default {
  alert,
  confirm,
  toast,
}
