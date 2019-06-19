import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from './lib/bus'
//import iview from 'iview'
//import 'iview/dist/styles/iview.css'

import IconFont from '_c/icon-font'
import IconSvg from '_c/icon-svg'

Vue.component('icon-font',IconFont)
Vue.component('icon-svg',IconSvg)

if (process.env.NODE_ENV !== 'production') require('./mock')

//Vue.use(iview)

Vue.config.productionTip = false

Vue.prototype.$bus = bus
import countTo from '_c/countTo'
import list from '_c/list'

const liEleArr = [
  {name:'haoxin'},
  {name:'xinge'}
]

new Vue({
  router,
  store,
  // render: h => h('div',{
  //   attrs: {
  //     id: 'root',
  //     'class': 'root'
  //   },
  //   style: {
  //     color: 'pink'
  //   }
  // },[
  //   h('ul',liEleArr.map ((item,index) => {
  //     return h('li',{
  //       props: {
  //         key: `item_index_${index}`
  //       }
  //     },item.name)
  //   }))
  // ])
  render: h => h(App)
  // render: h => h(countTo,{
  //   props: {
  //     endVal: 200
  //   },
  //   on: {
  //     'on-amimation-end':(param) => {
  //       console.log(param)
  //     }
  //   },
  //   nativeOn: {
  //     click: (event) => {
  //       console.log(event)
  //     }
  //   },
  //   slot: 'slotname'
  // },'this is slot')
  // render: h => h(list,{
  //   props: {
  //     list: [
  //       {name: 'haoxin'},
  //       {name: 'xinye'}
  //     ]
  //   },
  //   nativeOn: {
  //     click: (event)=>{
  //       console.log(event)
  //     }
  //   }
  // })
}).$mount('#app')
