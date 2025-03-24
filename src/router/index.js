

import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue';
import NotFound from '../pages/NotFound.vue';



const routes = [
  { path: '/', component: Dashboard},
 






  { path: '/:pathMatch(.*)*', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;