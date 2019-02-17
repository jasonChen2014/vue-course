import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { setTitle,getToken,setToken } from '@/lib/util'
import store from '@/store'
import clonedeep from 'clonedeep'

Vue.use(Router)

const router = new Router({
    routes
})


router.beforeEach((to,from,next) => {
    //console.log('beforeEach')
    const token = getToken()
    if(token) {
        // store.dispatch('authorization',token).then(() => {
        //     if(to.name === 'login') next({name: 'home'})
        //     else next()
        // }).catch((error) => {
        //     setToken('')//token失效的情况下避免死循环
        //     next({name: 'login'})
        // })

        if(!store.state.user.hadGetRoutes) {
            store.dispatch('authorization',token).then(rules => {
                store.dispatch('concatRoutes',rules).then(routesList => {
                    //console.log(routesList)
                    router.addRoutes(clonedeep(routesList))
                    //console.log(router)
                    next({...to,replace: true})
                }).catch(err => {
                    next({name: 'login'})
                })
            })
        }else {
            if(to.name === 'login') {
                next({name: 'home'})
            }else{
                next()
            }
        }
    }else{
        if(to.name === 'login') {
            next()
        }else{
            next({name:'login'})
        }
    }
})

router.beforeResolve((to,from,next) => {
    //console.log('beforeResolve')
    next();
})

router.afterEach((to,from) => {
    //console.log('afterEach')
    //console.log(to)
   //logining = false
   to.meta && setTitle(to.meta.title)
})

export default router
