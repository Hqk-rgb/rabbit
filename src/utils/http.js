//axios的基础封装
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

const http = axios.create({
	baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
	timeout: 3000
})

//拦截器
http.interceptors.request.use(
	config => {
		return config
	},
	e => Promise.reject(e)
)

//axios响应式拦截器
http.interceptors.response.use(
	res => res.data,
	e => {
		//统一错误提示
		ElMessage({
			type: 'error',
			message: e.response.data.message
		})
		return Promise.reject(e)
	}
)

export default http
