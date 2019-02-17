
import Home from '@/views/home.vue'
import layout from '@/views/layout.vue'
export const routeMap =  [
    {
      path: '/',
      name: 'home',
      component: layout,
      children: [
        {
          path: 'folder_tree',
          name: 'folder_tree',
          component: () => import('@/views/folder-tree/folder-tree.vue'),
        }
      ]
      // props: to => ({food: 'chicken'}),
      // beforeEnter(to,from,next) {
      //   //console.log('beforeEnter');
      //   next();
      // }
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
      path: '/iconPage',
      name: 'iconPage',
      component: () => import('@/views/icon-page.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/form.vue'),
    },
    {
      path: '/form2',
      name: 'form2',
      component: () => import('@/views/form2.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('@/views/upload.vue'),
    },
    {
      path: '/countView',
      name: 'countView',
      component: () => import('@/views/countView.vue')
    },
    {
      path: '/menuPage',
      name: 'menuPage',
      component: () => import('@/views/menu-page.vue')
    },
    {
      path: '/render-page',
      name: 'renderPage',
      component: () => import('@/views/render-page.vue')
    },
    {
      path: '/split-pane',
      name: 'splitPane',
      component: () => import('@/views/split-pane.vue')
    },
    {
      path: '/argu/:username',
      name: 'argu',
      component: () => import('@/views/argu.vue'),
      props: true
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('@/views/parent.vue'),
      children: [
        {
          path: 'child',
          name: 'child',
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
      name: 'main',
      redirect: to => ({name: 'home'})
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/views/store.vue'),
    },
    {
      path: '/*',
      name: 'all',
      component: () => import('@/views/404.vue')
    }
]

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  }
]

