import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // 别名
  alias: {
    '@': resolve(__dirname, 'src'),
    '@tmp': resolve(__dirname, '.tmp'),
  },
  devPort: '3002',
  containerId: 'app',
  modulePrefix: 'mb_',
  outputPath: 'dist',
  proxyTable: {
    '/api': {
      target: 'http://localhost:4002',
      changeOrigin: true
    }
  },
}
