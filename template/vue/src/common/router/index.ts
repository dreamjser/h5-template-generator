import router from '@/portal/router_entry'
import { checkAuth } from './auth'

export type RouterProps = {
  params?: object
  replace?: boolean
  query?: object
}

export const push = (pathname: string, opts: RouterProps) => {
  // 权限校验
  if (!checkAuth(pathname)) {
    return
  }
  if (!opts) {
    router.push(pathname)
  } else {
    const routerOpts: any = {
      path: pathname,
      replace: opts.replace || false,
    }
    if(opts.query) {
      routerOpts.query = opts.query
    }
    if(opts.params) {
      routerOpts.params = opts.params
    }

    router.push(routerOpts)
  }
}

export const pop = (index?: number) => {
  router.go(index || -1)
}

export default {
  push,
  pop,
}
