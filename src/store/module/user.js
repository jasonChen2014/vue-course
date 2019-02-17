import { login,authorization } from '@/api/user'
import { getToken,setToken } from '@/lib/util'
import { routes,routeMap } from '@/router/router'


const state = {
    userName: 'hxchen',
    hadGetRoutes: false,
    routes: routes
}
const mutations = {
    MODIFY_USER_NAME(state,params){
        state.userName = params
    },
    CONCAT_ROUTES(state,routeList) {
        state.hadGetRoutes = true
        state.routes = [...routeList,...routes]
        //console.log(state.routes)
    }
}

const genRouteList = (rules,routes) => {
    return routes.filter(item => {
        if(rules[item.name]) {
            //递归记得条件判断
            if(item.children) item.children = genRouteList(rules,item.children)
            return true
        }else{
            return false
        }
    })
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
                    resolve(res.data.rules.page)
                }else{
                    reject(new Error(res.data.mes))
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    concatRoutes({commit},rules) {
        return new Promise((resolve,reject) => {
            try {
                let routeList = []
                if(Object.entries(rules).every(item => item[1])) {
                    routeList = routeMap
                }else{
                    routeList = genRouteList(rules,routeMap)
                }
                commit('CONCAT_ROUTES',routeList)
                resolve(routeList)
            } catch (error) {
                reject(error)
            }
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