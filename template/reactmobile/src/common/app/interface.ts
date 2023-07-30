import {
  Modal,
  ModalAlertProps,
  ModalConfirmProps,
  Toast,
  ToastShowProps,
} from 'antd-mobile'

export type AlertProps = string | ModalAlertProps

export const alert = (opts: AlertProps) => {
  if (typeof opts === 'string') {
    return Modal.alert({
      confirmText: '确定',
      content: opts,
    })
  } else {
    return Modal.alert(opts)
  }
}

export type ConfirmProps = string | ModalConfirmProps

export const confirm = (opts: ConfirmProps) => {
  if (typeof opts === 'string') {
    return Modal.confirm({
      confirmText: '确定',
      content: opts,
    })
  } else {
    return Modal.confirm(opts)
  }
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
