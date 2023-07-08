import { useIntersectionObserver } from '@vueuse/core'
//定义懒加载插件
export const lazyPlugin = {
	install(app) {
		//定义全局指令
		app.directive('img-lazy', {
			mounted(el, binding) {
				console.log(el, binding.value)
				const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
					console.log(isIntersecting)
					if (isIntersecting) {
						el.src = binding.value
						stop()
					}
				})
			}
		})
	}
}
