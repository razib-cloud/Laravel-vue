

import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import NotFound from '../pages/NotFound.vue';
import Menus from '../pages/menus/menus.vue';
import CreateMenu from '../pages/menus/CreateMenu.vue';
import UpdateMenu from '../pages/menus/UpdateMenu.vue';



const routes = [
  { path: '/', component: Dashboard},



  { path:'/menus', component: Menus },
  { path:'/menus/create', component: CreateMenu },
  { path:'/menus/edit/:id', component: UpdateMenu },
 






  { path: '/:pathMatch(.*)*', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;