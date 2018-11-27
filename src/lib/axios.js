import {baseURL} from '@/config'
import axios from 'axios'

class HttpRequest {
    constructor(baseUrl = baseURL){
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig(){
        const config = {baseUrl:this.baseUrl}
        return config
    }
    interceptors(instance,url) {
        instance.interceptors.request.use(config => {
            if(!Object.keys(this.queue).length) {
                //show spin loading
            }
            this.queue[url] = true
            return config
        },error => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            delete this.queue[url]
            const {status,data} = res
            return {status,data}
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