import Vue from "vue";
import VueRouter from "vue-router";
import User from "./components/features/User/User";
import Admin from "./components/features/Admin/Admin";
import Home from "./views/HomeView";
import Product from "./views/ProductView";
import advancedSearch from "./views/AdvancedSearchView";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/shop", component: User },
    { path: "/admin", component: Admin },
    { path: "/advanced-search", component: advancedSearch },
    { path: "/product/:productId", name: "product", component: Product },
    { path: "**", redirect: "/shop" },
  ],
});

export default router;
