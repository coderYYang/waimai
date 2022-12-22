import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'wap-home-o'
        }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/cart/index.vue'),
        meta: {
          title: '购物车',
          icon: 'cart-o'
        }
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('../views/order/index.vue'),
        meta: {
          title: '订单',
          icon: 'coupon-o'
        }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/mine/index.vue'),
        meta: {
          title: '我的',
          icon: 'manager-o'
        }
      }
    ]
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/store/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router