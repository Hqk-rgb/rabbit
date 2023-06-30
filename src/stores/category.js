import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategory } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
	//state 导航列表数据
	const categoryList = ref([])
	//action 获取导航数据的方法
	const getCategoryList = async () => {
		const res = await getCategory()
		console.log(res)
		categoryList.value = res.result
	}
	return { getCategoryList, categoryList }
})
