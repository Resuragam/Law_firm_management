// 封装axios
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // 请求路由
  baseURL: 'http://101.43.184.159:8005',
  // 请求超时时间
  timeout: 10000,
})

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
)

export default service
