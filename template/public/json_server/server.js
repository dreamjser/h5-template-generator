// server.js
const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create('./')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)
router.render = (req, res) => {
  setTimeout(() => {
    res.jsonp({
      errorCode: '0',
      errorMsg: 'success',
      data: res.locals.data
    })
  }, 400)
}

server.listen(4002, () => {
  console.log('JSON Server is running')
})
