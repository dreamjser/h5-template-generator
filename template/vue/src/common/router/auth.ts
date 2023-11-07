import routers from '@tmp/routers'
import router from '@/portal/router_entry'

const getAuthInfo = (pathname: string) => {
  const routerMaps: any = {}

  routers.reduce((prev: any, current: any) => {
    prev[current.path] = current.meta
    return prev
  }, routerMaps)

  return routerMaps[pathname] || null
}

export const checkAuth = (pathname: string) => {
  const authInfo = getAuthInfo(pathname)

  if (authInfo.needLogin !== false) {
    router.push('/login')
    return false
  }
  return true
}
