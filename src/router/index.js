import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home/Bookcity'
  },
  {
    path: '/home',
    component: () => import('@/views/long-home.vue'),
    children : [
      {
        path: 'bookshelf',
        component: () => import('@/pages/long-bookshelf.vue')
      },
      {
        path: 'Bookcity',
        component: () => import('@/pages/long-Bookcity.vue'),
      },
      {
        path: 'classification',
        component: () => import('@/pages/long-classification.vue'),
        children: [
           {
            path:'/',
            redirect:'/home/classification/Novelranking'
           },
           {
            path: 'Novelranking',
            component: () => import('@/components/comp-Novelranking.vue'),
           },
           {
            path: 'Novelranking2',
            component: () => import('@/components/comp-Novelranking2.vue'),
           },
           {
            path: 'Novelranking3',
            component: () => import('@/components/comp-Novelranking3.vue'),
           },
           {
            path: 'Novelranking4',
            component: () => import('@/components/comp-Novelranking4.vue'),
           },
           {
            path: 'Novelranking5',
            component: () => import('@/components/comp-Novelranking5.vue'),
           },
        ]
      },
      {
        path: 'myInformation',
        component: () => import('@/pages/long-myInformation.vue')
      },
    ]
  },
  {
    path:'/login',
    name:"Login",
    component: () => import('@/pages/long-login.vue'),
  }
  
]
const router = new VueRouter({
  routes
})

export default router
