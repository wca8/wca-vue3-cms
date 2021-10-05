import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from '@/store'
setupStore()
const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')
app.use(globalRegister)
