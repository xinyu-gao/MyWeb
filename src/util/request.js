// import axios from 'axios'
// import { Notify } from 'vant'
// // import { getToken } from './auth'
//
// export const creatRequest = axios.create({
//     baseURL: process.env.VUE_APP_BASE_API, // 请求地址
//     timeout: 7000 // 请求超时时间
// })
//
// creatRequest.interceptors.request.use(config => {
//     config.headers = {
//         'Content-Type': 'application/json', // 请求格式为 json
//         // 'Authorization': getToken() // 设置 Token
//     }
//     config.data = JSON.stringify(config.data)
//     return Promise.resolve(config)
// }, error => {
//     Notify({ type: 'warning', message: '请求超时' })
//     return Promise.reject(error)
// })
//
// creatRequest.interceptors.response.use(data => {
//     data = data && data.data || {}
//     if (data && data.code === 200) { // 返回 200 代码，正常返回 data，否则抛出异常
//         return Promise.resolve(data.data)
//     } else if (data.code === 401) {
//         return Promise.resolve(data.data)
//     } else {
//         return Promise.reject(data.message)
//     }
// }, err => {
//     if (err.response.status === 500) {
//         Notify({ type: 'danger', message: '服务器连接失败' })
//     }
//     return Promise.reject(err)
// })
//
// export const creatRequestForFile = axios.create({
//     baseURL: process.env.VUE_APP_BASE_API,    // 请求地址
//     timeout: 7000,    // 请求超时时间
//     method: 'post'     // 上传文件为 post方法
// })
//
// creatRequestForFile.interceptors.request.use(config => {
//     config.headers = {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//         // 'Authorization': getToken()
//     }
//     return Promise.resolve(config)
// }, error => {
//     Notify({ type: 'warning', message: '请求超时' })
//     return Promise.reject(error)
// })
//
// creatRequestForFile.interceptors.response.use(data => {
//     data = data && data.data || {}
//     if (data && data.code === 200) {
//         return Promise.resolve(data.data)
//     } else if (data.code === 401) {
//         return Promise.resolve(data.data)
//     } else {
//         return Promise.reject(data.message)
//     }
// }, err => {
//     if (err.response.status === 500) {
//         Notify({ type: 'danger', message: '服务器连接失败' })
//     }
//     return Promise.reject(err)
// })
