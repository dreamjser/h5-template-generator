# @dreamjser/h5-template-generator

## 安装

```
  // npm全局安装
  npm i @dreamjser/h5-template-generator -g

  // yarn全局安装
  yarn add @dreamjser/h5-template-generator -g

  // pnpm全局安装
  pnpm add @dreamjser/h5-template-generator -g
```


## 使用

脚手架支持生成vue/react，pc端/移动端的项目

```
  // 选择平台 mobile-移动端 destop-桌面(PC)端
  > generate-template h5-project
  ? please select a platform
  1) mobile
  2) desktop
  Answer: 1
  // 选择框架
  ? please select a framework
  1) react
  2) vue
  Answer: 1
  // 选择构建工具
  ? please select a build tool
  1) vite
  2) webpack
  Answer: 1
  // 选择是否创建微前端(主应用/微应用)
  ? do you will create an mico app?
  1) N 2)mainApp 3)micoApp
  Answer: 3
  // 是否使用e2e测试平台
  ? do you need use e2e test platform(cypress)?
  1) Y
  2) N
  Answer: 1

  // 此时已生成项目h5-project
  > cd h5-project
  // 安装依赖
  > pnpm i
```

## 支持能力

|   | vue + mobile  | vue + desktop  | react + mobile  | react + desktop  |
|:----------|:----------|:----------|:----------|:----------|
| 框架    | vue3   | vue3    | react18    | react18    |
| 状态管理库    | pinia    | pinia    | react-redux    | react-redux    |
| 组件库    | vant    | elementPlus    | antd-mobile    | antd    |
| 微前端    | qiankun    | qiankun    | qiankun    | qiankun    |
| css预编译    | Less    | Less    | Less    | Less    |
| 构建工具    | webpack/vite    | webpack/vite   | webpack/vite    | webpack/vite    |
| typeScript    | :white_check_mark:     | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| eslint    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| prettier    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| 单页面打包    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| 多页面打包    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:   | :white_check_mark:    |
| 本地mock    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| 环境变量   | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| pre-commit校验    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| 单元测试(jest)    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |
| 端到端测试(cypress)    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    | :white_check_mark:    |

## 模板

模板文档参考：

react模板: [https://github.com/dreamjser/h5-react-template](https://github.com/dreamjser/h5-react-template)

vue模板: [https://github.com/dreamjser/h5-vue-template](https://github.com/dreamjser/h5-vue-template)


