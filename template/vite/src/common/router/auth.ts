interface RouteMeta {
  needLogin?: boolean
  title?: string
  [key: string]: any
}

interface ModuleConfig {
  [key: string]: {
    [key: string]: {
      title: string
      needLogin?: boolean
      [key: string]: any
    }
  }
}

// 路由配置缓存
let routerMapsCache: Record<string, RouteMeta> | null = null

/**
 * 获取所有模块的配置文件
 * @returns 路由配置映射对象
 */
const getAuthInfo = (pathname: string): RouteMeta | null => {
  try {
    // 如果缓存存在，直接返回
    if (routerMapsCache) {
      return routerMapsCache[pathname] || null
    }

    // 初始化路由映射对象
    const routerMaps: Record<string, RouteMeta> = {}

    // 使用 Vite 的 import.meta.glob 获取所有模块的配置
    const modules = import.meta.glob('@/modules/*/conf.json', {
      eager: true,
    }) as Record<string, { default: ModuleConfig }>
    // 处理每个模块的配置
    Object.entries(modules).forEach(([path, module]) => {
      const conf = module.default
      const moduleName = path.split('/')[3] // 获取模块名称
      // 遍历模块配置
      Object.entries(conf).forEach(([pageName, pageConfig]) => {
        Object.entries(pageConfig).forEach(([subPage, meta]) => {
          // 构建路由路径
          const routePath = `/${moduleName}/${pageName}/${subPage}`
          routerMaps[routePath] = {
            title: meta.title,
            needLogin: meta.needLogin,
          }
        })
      })
    })

    // 缓存路由映射
    routerMapsCache = routerMaps

    // 返回对应路径的权限信息
    return routerMaps[pathname] || null
  } catch (error) {
    console.error('Error reading modules configuration:', error)
    return null
  }
}

/**
 * 检查路由权限
 * @param pathname 路由路径
 * @returns 是否有权限访问
 */
export const checkAuth = (pathname: string): boolean => {
  const authInfo = getAuthInfo(pathname)
  console.log('authInfo', authInfo)
  // 如果没有配置权限信息，默认需要登录
  if (authInfo?.needLogin !== false) {
    // TODO: 实现登录跳转逻辑
    console.log('请先登录')
    App.interface.toast('请先登录')
    return false
  }

  return true
}

export default {
  checkAuth,
  getAuthInfo,
}
