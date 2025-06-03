import router from '@/portal/router_entry'
import { checkAuth } from './auth'

// 定义路由参数接口
export interface RouterProps {
  state?: Record<string, any>
  replace?: boolean
  query?: Record<string, any>
}

/**
 * 路由跳转方法
 * @param pathname 目标路径
 * @param opts 路由参数
 */
export const push = async (
  pathname: string,
  opts?: RouterProps,
): Promise<void> => {
  if (!checkAuth(pathname)) {
    return
  }

  if (opts?.replace) {
    await router.replace({
      path: pathname,
      query: opts?.query,
      state: opts?.state
    })
  } else {
    await router.push({
      path: pathname,
      query: opts?.query,
      state: opts?.state
    })
  }
}

/**
 * 路由返回方法
 * @param index 返回层级，默认为1
 */
export const pop = async (index: number = 1): Promise<void> => {
  router.go(-index)
}

// 导出路由实例
export default {
  push,
  pop,
}
