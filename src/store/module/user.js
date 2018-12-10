import { login,authorization } from '@/api/user'
import { getToken,setToken } from '@/lib/util'
const state = {
    userName: 'hxchen'
}
const mutations = {
    MODIFY_USER_NAME(state,params){
        state.userName = params
    }
}
const actions = {
    login({commit},{userName,password}) {
        return new Promise((resolve,reject) => {
            login({userName,password}).then((res)=>{
                if(res.data.token){
                    setToken(res.data.token)//最好不要在前端操作cookie
                    resolve()
                }else{
                    reject(new Error(res.data.mes))
                }
            }).catch((error)=>{
                reject(error)
            })
        })
    },
    authorization({commit}) {
        return new Promise((resolve,reject) => {
            authorization().then((res) => {
                if(res.data.token){
                    setToken(res.data.token)
                    resolve()
                }else{
                    reject(new Error(res.data.mes))
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    logout() {
        setToken('')
    }
}
const getters = {
    userNameFirstLetter: state => {
        return state.userName.substr(0,1)
    }
}
export default {
    //namespaced: true,
    state,
    mutations,
    actions,
    getters
}