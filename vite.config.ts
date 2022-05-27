const fs = require('fs')
import { resolve } from 'path'
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require('dotenv')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const envFiles = [
//   /** default file */
//   `.env`,
//   /** mode file */
//   `.env.${process.env.NODE_ENV}`
// ]

// for (const file of envFiles) {
//   const envConfig = dotenv.parse(fs.readFileSync(file))
//   for (const k in envConfig) {
//     process.env[k] = envConfig[k]
//   }
// }

export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 8080,
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    proxy: {
      '/api': {
        target: 'https://cloud-music-api-lake.vercel.app/',
        changeOrigin: true,
        rewrite: (pathStr) => pathStr.replace('/api', '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      public: resolve(__dirname, './public')
    }
  },
  optimizeDeps: {
    include: ['element-plus', 'element-plus/lib/locale/lang/zh-cn', 'dayjs/locale/zh-cn']
  },
  build: {
    // 压缩
    minify: 'esbuild',
    assetsDir: ''
    // outDir: `./dist/${process.env.VITE_ENV}`
  }
})
