import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: (to, from, next) => {
      const token = to.query.token;
      if (typeof token === 'string') {
        // 將 token 存到 localStorage 或 Vuex
        localStorage.setItem('authToken', token);

        // 移除 URL 中的 token 參數
        next({ path: '/', query: {} });
      } else {
        next();
      }
    },
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ShopperLogin.vue') }],
  },
  {
    path: '/product/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ProductPage.vue') }],
  },
  {
    path: '/checkout',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CheckOut.vue') }],
  },
  {
    path: '/shoppingcart',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Cart.vue') }],
  },
  {
    path: '/mypage',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/shopper/MyOrder.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
