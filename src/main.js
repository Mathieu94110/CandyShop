import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import * as Filters from "./utils/filters";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faMobileRetro,
  faUser,
  faCartShopping,
  faBars,
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faMinusCircle,
  faPlusCircle,
  faLeftLong,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faMagnifyingGlass,
  faMobileRetro,
  faUser,
  faCartShopping,
  faBars,
  faChevronLeft,
  faChevronRight,
  faInstagram,
  faFacebook,
  faPinterest,
  faYoutube,
  faArrowLeft,
  faMinusCircle,
  faPlusCircle,
  faLeftLong,
  faRightLong
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Object.keys(Filters).forEach((f) => {
  Vue.filter(f, Filters[f]);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
