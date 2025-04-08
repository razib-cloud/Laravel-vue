

import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import NotFound from '../pages/NotFound.vue';
import CreateMenu from '../pages/menus/CreateMenu.vue';
import UpdateMenu from '../pages/menus/UpdateMenu.vue';
import Menus from '../pages/menus/menus.vue';



const routes = [
  { path: '/', component: Dashboard},



  { path:'/menus', component: Menus },
  { path:'/menus/create', component: CreateMenu },
  { path:'/menus/edit/:id', component: UpdateMenu },


  // { path:'/products', component: ManageProducts },
  // { path:'/products/create', component: CreateProduct},


 






  { path: '/:pathMatch(.*)*', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;