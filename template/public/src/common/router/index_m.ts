import { checkAuth } from './auth'

// 定义路由参数接口
export interface RouterProps {
  state?: Record<string, any>
  replace?: boolean
  query?: Record<string, any>
}

/**
 * 解析查询字符串
 * @param data 查询参数对象
 * @returns 格式化的查询字符串
 */
function parseQueryString(data: Record<string, any>): string {
  if (!data) return ''

  return (
    '?' +
    Object.entries(data)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join('&')
  )
}

/**
 * 构建完整路径
 * @param pathname 路径名
 * @param query 查询参数
 * @returns 完整路径
 */
function buildFullPath(pathname: string, query?: Record<string, any>): string {
  const queryString = query ? parseQueryString(query) : ''
  return `${pathname}.html${queryString}`
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

  // 多页面应用使用 window.location
  const fullPath = buildFullPath(pathname, opts?.query)
  if (opts?.replace) {
    window.location.replace(fullPath)
  } else {
    window.location.href = fullPath
  }
}

/**
 * 路由返回方法
 * @param index 返回层级，默认为1
 */
export const pop = async (index: number = 1): Promise<void> => {
  // 多页面应用使用 window.location
  window.history.go(-index)
}

// 导出路由实例
export default {
  push,
  pop,
}
