import axios from 'axios'

export function request(config) {
  // 1. 创建axios的实例对象
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance(config)
}