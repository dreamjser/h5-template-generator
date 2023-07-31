import {
  ElMessageBox,
  ElMessageBoxOptions,
  ElMessage,
  MessageOptions,
} from 'element-plus'

export type AlertProps = string | ElMessageBoxOptions

export const alert = (opts: AlertProps) => {
  if (typeof opts === 'string') {
    return ElMessageBox.alert(opts, '提示', {
      confirmButtonText: '确定'
    })
  } else {
    return ElMessageBox.alert(opts.message, opts.title || '提示', Object.assign({
      confirmButtonText: '确定'
    }, opts))
  }
}

export type ConfirmProps = string | ElMessageBoxOptions

export const confirm = (opts: ConfirmProps) => {
  if (typeof opts === 'string') {
    return ElMessageBox.confirm(opts, '提示')
  } else {
    return ElMessageBox.confirm(opts.message, opts.title || '提示', Object.assign({
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }, opts))
  }
}


type ToastContentOption = {
  content?: string
}

export type ToastProps = string | (MessageOptions & ToastContentOption)

export const toast = (opts: ToastProps) => {
  if(typeof opts !== 'string') {
    opts.message = opts.content || opts.message
  }
  return new Promise((reslove: any) => {
    ElMessage(Object.assign(opts, {
      onClose: reslove
    }))
  })

}

export default {
  alert,
  confirm,
  toast,
}
