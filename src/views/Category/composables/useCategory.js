// 封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category'
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
	//获取数据
	const categoryData = ref({})
	const route = useRoute()
	const getCategory = async (id = route.params.id) => {
		const res = await getCategoryAPI(id)
		categoryData.value = res.result
	}
	onMounted(() => {
		getCategory()
	})
	//下面两种方案是应对点击导航栏页面不跳转的问题(路由缓存)
	onBeforeRouteUpdate(to => {
		getCategory(to.params.id)
	})
	// watchEffect(() => {
	// 	getCategory()
	// })
	watchEffect(() => {})
	return { categoryData }
}
