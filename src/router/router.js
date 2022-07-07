import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../page/home/home.vue'

const router = createRouter({
  // hash 模式。
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: Home //顶层路由，对应index.html
    },
    {
      path: '/',
      component: Home //顶层路由，对应index.html
    }
  ]
})
export default router
