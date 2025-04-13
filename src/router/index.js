import MainLayout from "../layout/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import NotFound from "../pages/NotFound.vue";
import CreateMenu from "../pages/menus/CreateMenu.vue";
import Menus from "../pages/menus/Menus.vue";
import UpdateMenu from "../pages/menus/UpdateMenu.vue";
import ManageOrders from "../pages/orders/ManageOrders.vue";
import CreateProduct from "../pages/products/CreateProduct.vue";
import ManageProducts from "../pages/products/ManageProducts.vue";
import UpdateProduct from "../pages/products/UpdateProduct.vue";
import Signin from "../pages/LoginRegister/Signin.vue";

const routes = [
  { path: "/login", name: "Login", component: Signin, meta: { public: true } },
  {
    path: "/",
    component: MainLayout,
    childern: [
      { path: "/dashboard", component: Dashboard },
      { path: "menus", component: Menus },
      { path: "menus/create", component: CreateMenu },
      { path: "menus/edit/:id", component: UpdateMenu },

      { path: "products", component: ManageProducts },
      { path: "products/create", component: CreateProduct },
      { path: "products/edit/:id", component: UpdateProduct },

      { path: "orders", component: ManageOrders },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
