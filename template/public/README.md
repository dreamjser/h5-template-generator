# 使用教程

## 1.目录结构

```
├─.husky                      ----------- husky配置
├─.tmp                        ----------- 脚手架自动生成的路由文件
├─config
|  ├─dev.env.js               ----------- 本地环境配置
|  ├─sit.env.js               ----------- 测试环境配置
|  ├─prod.env.js              ----------- 生产环境配置
|  ├─develop.env.js           ----------- 开发环境配置
|
├─deploy                      ----------- 部署相关配置(docker/nginx)
├─json_server                 ----------- mock本地服务及部署配置(docker/pm2)
|
├─node_modules
|
├─src
|  ├─common                   ----------- 公共处理
|  |     |-app                ----------- 全局app对象挂载文件
|  |     ├─components         ----------- 公共组件
|  |     ├─request            ----------- 公共请求封装
|  |     ├─store              ----------- 状态管理
|  |     ├─router             ----------- 路由跳转
|  |     ├─styles             ----------- 公共样式
|  |     ├─utils              ----------- 工具库
|  |
|  ├─modules                  ----------- 业务模块
|  |
|  ├─portal                   ----------- 入口文件夹
|  |
|  ├─template                 ----------- 模板
|  ├
|  ├─typings                  ----------- ts类型文件
|
├─.editorconfig               ----------- 定义代码格式
├─babel.config.js             ----------- babel配置文件
├─.eslintrc.js                ----------- 定义eslint的plugins,extends,rules
├─.gitignore                  ----------- git上传需要忽略的文件格式
├─.lintstagedrc               ----------- lint-stage配置文件
├─.swcrc                      ----------- swc配置文件
|-commitlint.config.js        ----------- commitlint配置文件
├─package.json                ----------- 项目信息、项目依赖管理
├─tsconfig.json               ----------- ts配置文件
├─README.md                   ----------- 项目文档（简介、运行步骤、注意事项）
├─...

```

## 2.安装npm依赖

```
pnpm i

npm i

yarn
```


安装npm依赖后触发 `"prepare": "git init && chmod ug+x .husky/* && husky install",` 脚本，初始化git并且进行husky的install


### 3.创建新页面

npm run create [path] [title]

- path 页面路径，必须为三级目录，必填
- title 页面标题，非必填

```
// 前缀mb_需要在app.config.js中配置`modulePrefix
npm run create mb_demo/demo/index 标题
```

页面创建成功后会在一级目录下生成conf.json，里面自动配置了模块的页面路径和标题等信息。

## 4.支持单页面/多页面构建

脚手架同时支持单页面和多页面的页面构建，以满足不同场景的需求。
脚手架文档可参考 https://github.com/dreamjser/h5-webpack-cli

### 4.1 本地运行单页面工程

```
// 运行所有模块
npm run dev:single all
```

```
// 运行指定模块
npm run dev:single mb_login,mb_transfer
```

浏览器访问地址: `http://localhost:xxxx/#/mb_login/index/index`

### 4.2 本地运行多页面工程

```
// 运行所有模块
npm run dev:multiple all
```

```
// 运行指定模块
npm run dev:multiple mb_login,mb_transfer
```

浏览器访问地址: `http://localhost:xxxx/mb_login/index/index.html`

### 4.3 构建单页面工程

可以根据项目需要添加不同环境的构建命令

```
npm run build:s-test
```

### 4.4 构建多页面工程

可以根据项目需要添加不同环境的构建命令

```
npm run build:m-test
```

## 5.接口请求


```
// App为全局变量
App.request(opts).then((r) => {
  ...
})
```

opts参数可以设置axios的配置，配置同axios，同时新增了自定义配置如下

```
{
  // 是否显示loading，默认true
  slient?:
  // 是否上传文件，默认false，为true则默认使用FormData数据
  isUpload?: boolean
  // 传参数据，不区分method
  data?: object
  // 是否显示公共错误提示，默认true，为false可以在调用时捕获异常做处理
  publicError?: boolean
  // 请求发起前hook
  requestHook?: (opts: AllType) => any
  // 请求返回数据hook
  responseHook?: (reslove: any, reject: any, data: any) => void
}

```

## 6.提示弹框

### 6.1 alert 弹框

```

// opts 配置项 string | {message: '内容' : confirmButtonText: '确定按钮'}
App.interface.alert(opts)

```

### 6.2 confirm 弹框

```
// opts 配置项 string | {message: '内容' : confirmButtonText: '确定按钮', cancelButtonText: '取消按钮'}
App.interface.confirm(opts).then(() => {
  console.log('点击确定')
}).catch(() => {
  console.log('点击取消')
})
```

### 6.3 toast 提示

```
// opts 配置项 string | {message: '内容'}
app.interface.toast(opts)
```

## 7.环境变量配置

config目录下的xx.env.js，xx代表环境，对应构建命令的env选项

```
module.exports = {
  NODE_ENV: '"development"',
  BASE_URL: '"http://localhost:4003/api/"',
  PUBLIC_PATH: '/',
};

// 项目使用环境变量
let url = GLOBAL_ENV.BASE_URL
```

## 8.路由跳转/返回

- App.router.push(pathname:string, opts?:object) 跳转

  - pathname {string}跳转路径

  - opts.replace, {boolean}是否替换跳转
  - opts.state, {object}传递数据
  - opts.query, {object}传递url参数

- App.router.pop(index?:number) 返回

  - index {number} 返回层级

## 9.设置权限

设置权限可以在路由跳转时进行权限拦截，具体操作如下：

- 修改src/modules/xxx/conf.json

```
{
  "index": {
    "index": {
      "title": "react自学笔记-组件",
      // 权限在此处可自定义
      "needLogin": false
    }
  }
}
```

- 修改src/common/router/auth.ts

```
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

// 可修改checkAuth函数，对权限字段进行校验
export const checkAuth = (pathname: string) => {
  const authInfo = getAuthInfo(pathname)
  const userInfo = xxxx

  if (authInfo.needLogin !== false && ...) {
    router.navigate('/login')
    return false
  }
  return true
}
```

## 10.单元测试

脚手架集成jest测试框架，测试案例需在src目录下，新建__test__文件夹，并创建xxx.test.tsx?。测试执行脚本npm run test/npm run test:coverage

示例如下：

```
import React, {forwardRef} from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from '../index'

const UModal = forwardRef(Modal)
const children = '这是modal内容'


describe('测试Modal组件', () => {
  test('初始隐藏状态测试', () => {
    const {queryByText} = render(<UModal>{children}</UModal>)
    const element = queryByText(children)
    expect(element).not.toBeInTheDocument()
  })

  test('调用toogle显示状态测试', () => {
    const modalRef: any = React.createRef();
    const {queryByText} = render(<UModal ref={modalRef}>{children}</UModal>)
    const toogle = jest.spyOn(modalRef.current, 'toogle');
    act(() => {
      modalRef.current.toogle()
    })

    expect(toogle).toHaveBeenCalled();
    const element = queryByText(children)
    expect(element).toBeInTheDocument()

    fireEvent.click(element as HTMLElement)
    expect(element).not.toBeInTheDocument()
  })

})


```

## 11.端到端测试

通过脚手架选择使用端到端测试，根目录会生成cypress文件夹，在cypress/e2e下创建xx.cy.js编写用例。
运行`npm run cypress:open`运行cypress测试平台
