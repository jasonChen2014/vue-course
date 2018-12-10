import {baseUrl} from '@/config'
import axios from 'axios'
import { getToken } from '@/lib/util'

class HttpRequest {
    constructor(baseURL = baseUrl){
        this.baseURL = baseURL//注意baseURL大写部分
        this.queue = {}
    }
    getInsideConfig(){
        const config = {baseURL:this.baseURL}
        return config
    }
    interceptors(instance,url) {
        instance.interceptors.request.use(config => {
            if(!Object.keys(this.queue).length) {
                //show spin loading
            }
            config.headers['token'] = getToken()
            this.queue[url] = true
            return config
        },error => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            delete this.queue[url]
            if(!Object.keys(this.queue).length) {
                //hide spin loading
            }
            const {data} = res
            return data
        },error => {
            return Promise.reject(error)
        })
    }
    request(options){
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(),options)
        this.interceptors(instance,options.url)
        return instance(options)
    }
}
export default HttpRequest