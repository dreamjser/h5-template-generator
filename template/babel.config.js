module.exports = {
  sourceType: "unambiguous",
  presets: [
    ['@babel/preset-env',{
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    ['@babel/preset-react'],
    ['@babel/preset-typescript']
  ],
  plugins: [
    ['lodash'],
    ['@babel/plugin-transform-runtime'],
  ]
}
