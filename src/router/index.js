import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import util from '@/lib/util'

Vue.use(Router)

const router = new Router({
    routes
})

const LOGIN = true

router.beforeEach((to,from,next) => {
    //console.log('beforeEach')
    if(LOGIN) {
        if(to.name === 'login') {
            next({name:'home'})
        }else{
            next()
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
   to.meta && util.setTitle(to.meta.title)
})

export default router
