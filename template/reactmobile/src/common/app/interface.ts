import {
  Modal,
  ModalAlertProps,
  ModalConfirmProps,
  Toast,
  ToastShowProps,
} from 'antd-mobile'

export type AlertProps = string | ModalAlertProps

export const alert = (opts: AlertProps) => {
  return new Promise((reslove: any) => {
    if (typeof opts === 'string') {
      Modal.alert({
        confirmText: '确定',
        content: opts,
        onConfirm: reslove,
      })
    } else {
      opts.onConfirm = reslove
      Modal.alert(opts)
    }
  })
}

export type ConfirmProps = string | ModalConfirmProps

export const confirm = (opts: ConfirmProps) => {
  return new Promise((reslove: any, reject: any) => {
    if (typeof opts === 'string') {
      Modal.confirm({
        confirmText: '确定',
        content: opts,
        onConfirm: reslove,
        onCancel: reject,
      })
    } else {
      opts.onConfirm = reslove
      opts.onCancel = reject
      Modal.confirm(opts)
    }
  })
}

export type ToastProps = string | ToastShowProps

export const toast = (opts: ToastProps) => {
  return new Promise((reslove: any) => {
    if (typeof opts === 'string') {
      Toast.show({
        content: opts,
        afterClose: reslove,
      })
    } else {
      opts.afterClose = reslove
      Modal.show(opts)
    }
  })
}

export default {
  alert,
  confirm,
  toast,
}
