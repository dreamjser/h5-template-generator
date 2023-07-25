module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ],
  plugins: [
    ['lodash'],
    ['@babel/plugin-transform-runtime'],
  ]
}
