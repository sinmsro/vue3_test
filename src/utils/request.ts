import Axios, { Method, ResponseType, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'


// const baseURL = 'http://www.mock.com'
const axios = Axios.create({
  // baseURL,
  timeout: 20000
})
// 允许携带cookie
axios.defaults.withCredentials = true
// 请求头信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 默认使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'


//响应拦截器
axios.interceptors.response.use((response:AxiosResponse) =>{
if (response.data.token){
 sessionStorage.setItem('token',response.data.token)
}
return response
},(err)=>{
  console.log("响应异常",err);
  
}
)

// 请求拦截器
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (err) => console.log("请求异常",err)
)


export default axios