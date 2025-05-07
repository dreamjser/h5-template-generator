import path from 'path'

export default {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
    "@dreamjser/postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: (file) => {
        const designWidth = (file.includes(path.join('node_modules', 'vant')) || file.includes(path.join('node_modules', 'antd-mobile'))) ? 375 : 750;
        return designWidth
      },
      unitPrecision: 6,
      propList: ["*"],
      minPixelValue: 2,
      mediaQuery: true,
      replace: true,
      landscape: false
    }
  }
}