import './index.css'
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'

// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(ElementPlus);
app.mount('#app')

//定义全局指令
app.directive('img-lazy', {
	mounted(el, binding) {
		console.log(el, binding.value)
		useIntersectionObserver(el, ([{ isIntersecting }]) => {
			console.log(isIntersecting)
		})
	}
})
