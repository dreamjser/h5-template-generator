import router from '@/portal/router_entry'
import { checkAuth } from './auth'

export type RouterProps = {
  state?: object
  replace?: boolean
  query?: object
}

function parseQueryString(data: any) {
  const arr: any = []
  if (!data) {
    return ''
  }

  Object.keys(data).forEach((key: string) => {
    arr.push(`${key}=${data[key]}`)
  })

  return '?' + arr.join('&')
}

export const push = (pathname: string, opts?: RouterProps) => {
  // 权限校验
  if (!checkAuth(pathname)) {
    return
  }
  if (!opts) {
    router.navigate(pathname)
  } else {
    if (opts.query) {
      pathname = parseQueryString(opts.query)
    }
    delete opts.query
    router.navigate(pathname, opts)
  }
}

export const pop = (index?: number) => {
  router.navigate(index || -1)
}

export default {
  push,
  pop,
}
