/*
 * @Author: yy 691335336@qq.com
 * @Date: 2022-12-16 09:40:02
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2022-12-16 16:44:57
 * @FilePath: /waimai/src/main.ts
 * @Description: main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
