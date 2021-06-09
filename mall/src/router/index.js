import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index,
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../pages/product.vue')
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('../pages/detail.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/order.vue'),
    children: [
      {
        path: 'confirm',
        name: 'order-confirm',
        component: () => import('../pages/orderConfirm.vue')
      },
      {
        path: 'list',
        name: 'order-list',
        component: () => import('../pages/orderList.vue')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../pages/orderPay.vue')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('../pages/alipay.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savePosition) {
    // if (savePosition) return savePosition
    return {x: 0, y: 0}
  }, // 记录上次访问页面滚动的位置
  
})

export default router
