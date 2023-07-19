// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 750,
      unitPrecision: 6,
      propList: ["*"],
      minPixelValue: 2,
      mediaQuery: true,
      replace: true,
      landscape: false
    }
  }
}
