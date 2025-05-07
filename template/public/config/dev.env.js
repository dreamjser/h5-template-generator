import config from '../app.config'

export default {
  NODE_ENV: '"development"',
  BASE_URL: '"//localhost:4002/api/"',
  PUBLIC_PATH: `//localhost:${config.devPort}/`,
};
