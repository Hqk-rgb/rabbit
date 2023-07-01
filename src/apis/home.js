import http from '@/utils/http'

//获取banner
export function getBanner() {
	return http({
		url: '/home/banner'
	})
}
