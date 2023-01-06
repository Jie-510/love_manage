import { createApp } from 'vue'
import App from './App.vue'
// 初始化css
import '@/assets/styles/index.scss'
// svg注册脚本
import 'virtual:svg-icons-register'

import 'element-plus/dist/index.css'
// 分解app
const app = createApp(App)
// 全局注册svg
import SvgIcon from '@/components/SvgIcon.vue';
app.component('SvgIcon', SvgIcon)

// 路由
import router from '@/router/index';
app.use(router)

app.mount('#app')
