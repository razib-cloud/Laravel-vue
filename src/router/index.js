import MainLayout from '@/layout/MainLayout.vue';
import Dashboard from '@/pages/Dashboard.vue';
import NotFound from '@/pages/NotFound.vue';

import CreateMenu from '@/pages/menus/CreateMenu.vue';
import Menus from '@/pages/menus/Menus.vue';
import UpdateMenu from '@/pages/menus/UpdateMenu.vue';

import CreateProduct from '@/pages/products/CreateProduct.vue';
import ManageProducts from '@/pages/products/ManageProducts.vue';
import UpdateProduct from '@/pages/products/UpdateProduct.vue';


import Signin from '@/pages/LoginRegister/Signin.vue';
import { useAuthStore } from '@/store/AuthStore';

import { createRouter, createWebHistory } from 'vue-router';
import CreateOrder from '../pages/orders/CreateOrder.vue';





const routes = [
  { path: '/', name: 'Login', component: Signin, meta: { public: true } },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },

      { path: 'menus', component: Menus },
      { path: 'menus/create', component: CreateMenu },
      { path: 'menus/edit/:id', component: UpdateMenu },

      { path: 'products', component: ManageProducts },
      { path: 'products/create', component: CreateProduct },
      { path: 'products/edit/:id', component: UpdateProduct },



      // { path: 'orders', component: ManageOrder },
      { path: 'orders/create', component: CreateOrder }

    ],
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];






const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (!to.meta.public && !auth.token) {
    return next('/login');
  }
  next();
});

export default router;
