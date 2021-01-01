import { message } from 'antd'
import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'

const baseURL = 'http://127.0.0.1:3001/api'

type Request = (url: string, data?: object) => Promise<any>

interface HttpRequest {
    get?: Request
    post?: Request
    delete?: Request
    put?: Request
}

type Method = 'get' | 'post' | 'delete' | 'put'

const methods: Method[] = ['get', 'post', 'delete', 'put']

const http: HttpRequest = {}

methods.forEach(v => {
    http[v] = (url: string, data: any) => {
        const config: AxiosRequestConfig = {
            url,
            method: v,
            baseURL
        }
        const instance = axios.create({
            baseURL
        })
        // 请求拦截器
        instance.interceptors.request.use(
            cfg => {
                // 在这里可以添加头部信息
                return cfg
            },
            error => {
                return Promise.reject(error)
            }
        )
        // 结果拦截器
        instance.interceptors.response.use(
            res => {
                if (res && res.data) {
                    return res.data
                }
                return res
            },
            error => {
                return Promise.reject(error)
            }
        )
        if (v === 'get' || v === 'delete') {
            config.params = data
        } else {
            config.data = qs.stringify(data)
        }

        return instance
            .request(config)
            .then(res => {
                return res
            })
            .catch(err => {
                // 集中错误处理
                message.destroy()
                if (!!err.response) {
                    const errData = err.response.data
                    message.error(errData.message)
                } else {
                    const msg = err.message === 'Network Error' ? '网络错误' : '未知错误'
                    message.error(msg)
                }
                return Promise.reject(err)
            })
    }
})

export default http