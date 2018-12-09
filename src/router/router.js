
import Home from '@/views/home.vue'
export default [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: to => ({food: 'chicken'}),
      beforeEnter(to,from,next) {
        //console.log('beforeEnter');
        next();
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue'),
      props: {
        name: 'banana'
      },
      meta:{title:'关于'}
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/countView',
      component: () => import('@/views/countView.vue')
    },
    {
      path: '/menuPage',
      component: () => import('@/views/menu-page.vue')
    },
    {
      path: '/render-page',
      component: () => import('@/views/render-page.vue')
    },
    {
      path: '/split-pane',
      component: () => import('@/views/split-pane.vue')
    },
    {
      path: '/argu/:username',
      component: () => import('@/views/argu.vue'),
      props: true
    },
    {
      path: '/parent',
      component: () => import('@/views/parent.vue'),
      children: [
        {
          path: 'child',
          components: {
            default: () => import('@/views/child.vue'),
            email: () => import('@/views/email.vue'),
            tel: () => import('@/views/tel.vue'),
          }
        }
      ]
    },
    {
      path: '/namedroute',
      name: 'namedroute',
      components: {
        default: () => import('@/views/child.vue'),
        email: () => import('@/views/email.vue'),
        tel: () => import('@/views/tel.vue'),
      }
    },
    {
      path: '/main',
      redirect: to => ({name: 'home'})
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/views/store.vue'),
    },
    {
      path: '/*',
      component: () => import('@/views/404.vue')
    }
]

