import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router.ts';
import './global.sass';
createApp(App).use(router).mount('#app');
window.onerror = function (message, source, lineno, colno, error) {
  console.log('捕获到异常：', { message, source, lineno, colno, error });
};
