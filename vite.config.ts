import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

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
        '@': resolve(__dirname, 'src')
      }
    }
  });
