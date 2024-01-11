import Vue from "vue";
import VueRouter from "vue-router";
import ShopAndCard from "./components/ShopAndCard/ShopAndCard";
import Admin from "./components/Admin/Admin";
import Home from "./views/HomeView";
import Product from "./views/ProductView";
import advancedSearch from "./views/AdvancedSearchView";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/shop", component: ShopAndCard },
    { path: "/admin", component: Admin },
    { path: "/advanced-search", component: advancedSearch },
    { path: "/product/:productId", name: "product", component: Product },
    { path: "**", redirect: "/shop" },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
