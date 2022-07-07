import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const baseUrl = {
  development: './',
  beta: './',
  release: './'
};

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue()],
    base: baseUrl[mode],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://backend-api-02.newbee.ltd/manage-api/v1',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  });
