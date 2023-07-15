import './index.css'
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//引入懒加载插件
import { lazyPlugin } from './directives'
import { componentPlugin } from './components'

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
//app.use(createPinia())
app.use(router)

//app.use(ElementPlus);
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
