import axios from 'axios'
import { useTokenStore } from '@/stores'
import router from '@/router'
import { ElMessage } from 'element-plus'
const baseURL = '/api'
const instance = axios.create({ baseURL })

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    if (error.response.status === 401) {
      //ElMessage.error('还没有登陆哦')
      ElMessage.error('登录失败')
      router.push('/login')
    } else {
      ElMessage.error(error.response.data.msg || '后端挂掉了,献祭一个程序员修复ing')
    }
    return Promise.reject(error)
  }
)

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    const tokenStore = useTokenStore()
    if (tokenStore.token) {
      config.headers['Authorization'] = tokenStore.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
