// https://github.com/michael-ciniawsky/postcss-load-config
const path = require('path')

module.exports = ({file}) =>  {
  const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750;
  return {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      "autoprefixer": {},
      "@dreamjser/postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth,
        unitPrecision: 6,
        propList: ["*"],
        minPixelValue: 2,
        mediaQuery: true,
        replace: true,
        landscape: false
      }
    }
  }
}
