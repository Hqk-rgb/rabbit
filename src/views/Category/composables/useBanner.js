//封装banner轮播图相关的业务代码
import { ref, onMounted } from 'vue'
import { getBanner } from '@/apis/home'
export function useBanner() {
	//获取轮播图
	const bannerList = ref([])

	const getBannerList = async () => {
		const res = await getBanner({ distributionSite: '2' })
		console.log(res)
		bannerList.value = res.result
	}

	onMounted(() => getBannerList())
	return { bannerList }
}
