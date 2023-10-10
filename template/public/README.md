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
|-commitlint.config.js        ----------- commitlint配置文件
├─package.json                ----------- 项目信息、项目依赖管理
├─tsconfig.json               ----------- ts配置文件
├─README.md                   ----------- 项目文档（简介、运行步骤、注意事项）
├─...

```

## 2.安装npm依赖

```
// 推荐
pnpm i
```

```
npm i
```

```
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

