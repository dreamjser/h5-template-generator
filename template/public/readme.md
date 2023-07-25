
# 各个环境线上地址

```
dev: http://47.96.161.226:8888/dev/vue/
sit: http://47.96.161.226:8888/sit/vue/
uat: http://47.96.161.226:8888/uat/vue/
```


## 1、安装npm依赖

```
npm i
```

```
yarn
```

## 2、npm命令

### 2.1 创建新页面

```
// 以mb_开头，强制三级目录
npm run create mb_demo/demo/index
```

### 2.2 本地运行单页面工程

```
// 运行所有模块
npm run dev:single
```

```
// 运行指定模块
npm run dev:single mb_login,mb_transfer
```

### 2.3 本地运行多页面工程

```
// 运行所有模块
npm run dev:multiple
```

```
// 运行指定模块
npm run dev:multiple mb_login,mb_transfer
```

### 2.4 打开analyzer报告

```
npm run report
```

### 3、目录结构

```
├─bin
|  ├─build.multiple.js        ----------- 构建多页面任务文件
|  ├─build.single.js          ----------- 构建单页面任务文件
|  |-create.js                ----------- 创建新页面任务文件
|  |-dev.multiple.js          ----------- 本地多页面任务文件
|  ├─dev.single.js            ----------- 本地单页面任务文件
|  ├─help.dev.js              ----------- 本地构建工具函数
|  ├─help.prod.js             ----------- 生产构建工具函数
|
├─build
|  ├─utils.js                 ----------- 构建相关工具函数
|  ├─webpack.base.conf.js     ----------- 基础webpack环境配置
|  ├─webpack.dev.conf.js      ----------- 开发环境webpack配置
|  ├─webpack.prod.conf.js     ----------- 生产环境webpack配置
|
├─config
|  ├─dev.env.js               ----------- 本地环境配置
|  ├─sit.env.js               ----------- 测试环境配置
|  ├─uat.env.js               ----------- 预生产环境配置
|  ├─develop.env.js           ----------- 开发环境配置
|
├─dist
|
├─node_modules
|
├─src
|  ├─common                   ----------- 公共处理
|  |     |-api                ----------- 请求接口地图
|  |     ├─components         ----------- 公共组件
|  |     ├─request            ----------- 公共请求封装
|  |     ├─store              ----------- 状态管理
|  |     ├─styles             ----------- 公共样式
|  |     ├─utils              ----------- 工具库
|  |     ├─app.js             ----------- 公共样式
|  |
|  ├─components               ----------- 业务组件
|  |
|  ├─modules                  ----------- 业务模块
|  |
|  ├─portal                   ----------- 入口
|  |     ├─single             ----------- 单页面入口
|  |     ├─multiple           ----------- 多页面入口
|  |
|  ├─template                 ----------- 模板
|
|
├─babel.config.js             ----------- babel配置文件，ES6语法编译等配置
├─.editorconfig               ----------- 定义代码格式
├─.eslintrc.js                ----------- 定义eslint的plugins,extends,rules
├─.gitignore                  ----------- git上传需要忽略的文件格式
├─postcss.config.js           ----------- postcss配置文件
|-commitlint.config.js        ----------- postcss配置文件
├─package.json                ----------- 项目信息、项目依赖管理
├─README.md                   ----------- 项目文档（简介、运行步骤、注意事项）
├─...

```

5、权限配置

mb_xxx/conf.json中可以通过属性来配置权限

```
{
  "index": {
    "index": {
      "title": "转账管理"
    }
  },
  "single": {
    "index": {
      "title": "单笔转账",
      "checkTransfer": true,
      "checkCard": true
    },
    "result": {
      "title": "转账结果"
    },
    "confirm": {
      "title": "转账确认"
    }
  }
}
```

- needLogin: 默认不填写为需要登录，页面不需要登录时需要改成false
- checkTransfer: 默认不写为不检查转账权限，需要检查转账权限改成true
- checkCard: 默认不写为不检查是否有加挂卡，需要检查加挂卡权限改成true
