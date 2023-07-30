import { ReactNode } from 'react'
import { Modal, ModalFuncProps, message } from 'antd'

export type AlertProps = string | ModalFuncProps

export const alert = (opts: AlertProps) => {
  return new Promise((reslove: any) => {
    if (typeof opts === 'string') {
      Modal.info({
        title: '提示',
        content: opts,
        onOk: () => {
          reslove()
        },
      })
    } else {
      opts.onOk = () => {
        reslove()
      }
      Modal.info(opts)
    }
  })
}

export type ConfirmProps = string | ModalFuncProps

export const confirm = (opts: ConfirmProps) => {
  return new Promise((reslove: any, reject: any) => {
    const defaultOpts = {
      onOk: () => {
        reslove()
      },
      onCancel: () => {
        reject && reject()
      },
      okText: '确定',
      cancelText: '取消',
    }

    if (typeof opts === 'string') {
      Modal.confirm({
        content: opts,
        ...defaultOpts,
      })
    } else {
      Modal.confirm({
        ...defaultOpts,
        ...opts,
      })
    }
  })
}

type ToastOptions = {
  content: ReactNode
  duration?: number
  maxCount?: number
  icon?: ReactNode
  onClose: () => void
}

export type ToastProps = string | ToastOptions

export const toast = (opts: ToastProps) => {
  return new Promise((reslove: any) => {
    if (typeof opts === 'string') {
      message.open({
        content: opts,
        onClose: () => {
          reslove()
        },
      })
    } else {
      opts.onClose = () => {
        reslove()
      }
      message.open(opts)
    }
  })
}

export default {
  alert,
  confirm,
  toast,
}
