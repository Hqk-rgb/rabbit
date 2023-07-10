import http from '@/utils/http'

//获取banner
export function getBanner(params = {}) {
	//默认为1，商品为2
	const { distributionSite = '1' } = params
	return http({
		url: '/home/banner',
		params: {
			distributionSite
		}
	})
}
export function findNewAPI() {
	return http({
		url: '/home/new'
	})
}
export function findHotAPI() {
	return http({
		url: '/home/hot'
	})
}
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
	return http({
		url: '/home/goods'
	})
}
