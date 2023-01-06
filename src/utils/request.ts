import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig, AxiosInstance, myRequest } from 'axios';
import { ElMessage } from 'element-plus'
enum codeMsg {
    '请求成功' = 0,
    '请求报错' = 1,
    '请从新登录' = 2
}

const request: AxiosInstance = axios.create({
    baseURL: 'http://h5.itsource.cn:9999/',
    timeout: 5000
})

request.interceptors.request.use((config: myRequest) => {
    // 携带token
    const token = localStorage.getItem('token')
    if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (err: any) => {
    return Promise.reject(err)
})

request.interceptors.response.use((response: AxiosResponse) => {
    const res: any = response.data
    ElMessage(codeMsg[res.code])
    if (res.code === 0) {
        ElMessage({
            message: res.msg,
            type: 'success'
        })
    }
    return res
}, (err: any) => {
    return Promise.reject(err)
})

export default request