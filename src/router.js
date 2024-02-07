import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/HomeView";
import Product from "./views/ProductView";
import Admin from "./components/Admin/Admin";
import ShopAndCard from "./components/ShopAndCard/ShopAndCard";
import CategoriesList from "./views/CategoriesListView";
import AdvancedSearch from "./views/AdvancedSearchView";

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
      path: "/advanced-search",
      name: "advanced-search",
      component: AdvancedSearch,
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
