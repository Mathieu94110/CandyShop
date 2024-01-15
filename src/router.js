import Vue from "vue";
import VueRouter from "vue-router";
import ShopAndCard from "./components/ShopAndCard/ShopAndCard";
import Admin from "./components/Admin/Admin";
import Home from "./views/HomeView";
import Product from "./views/ProductView";
import CategoriesList from "./views/CategoriesListView";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/shop", component: ShopAndCard },
    { path: "/admin", component: Admin },
    {
      path: "/product/:productId",
      name: "product",
      component: Product,
    },
    {
      path: "/categories-list",
      name: "categories-list",
      component: CategoriesList,
    },
    {
      path: "/categories-list/:category",
      name: "categories-list",
      component: CategoriesList,
    },
    { path: "**", redirect: "/home" },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  linkExactActiveClass: "color-primary",
});

export default router;
