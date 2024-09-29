const config = require('../app.config')

module.exports = {
  NODE_ENV: '"development"',
  BASE_URL: '"//localhost:4002/api/"',
  PUBLIC_PATH: `//localhost:${config.devPort}/`,
};
