<template>
  <div id="app">
    <TheHeader
      :menu-list="menuList"
      :products="products"
      :show-mobile-menu="showMobileMenu"
      @switch-modal-display="switchModalDisplay"
      @show-menu="showMenu"
    />
    <BurgerMenu
      :show-mobile-menu="showMobileMenu"
      :menuList="menuList"
      @switch-modal-display="switchModalDisplay"
    />
    <div class="app__route-container">
      <router-view></router-view>
    </div>
    <div v-if="modalIsVisible" class="app__modal-calc">
      <SearchModal @switch-modal-display="switchModalDisplay" />
    </div>
    <TheFooter :left-items="leftItems" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import TheFooter from "@/components/TheFooter/TheFooter.vue";
import menuList from "./locales/menuList.json";
import leftItems from "./locales/headerLeftItems.json";
import SearchModal from "@/components/SearchModal/SearchModal.vue";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    SearchModal,
    BurgerMenu,
  },
  data() {
    return {
      menuList: menuList.list,
      leftItems: leftItems.items,
      showMobileMenu: false,
    };
  },
  methods: {
    switchModalDisplay() {
      this.$store.dispatch("product/switchModalDisplay");
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  computed: {
    ...mapState("product", {
      products: "datas",
      modalIsVisible: "isSearchModalVisible",
    }),
  },
  created() {
    if (!this.products.length) {
      this.$store.dispatch("product/fetchDatas");
    }
  },
};
</script>

<style>
:root {
  --color-primary: #ff4089;
  --color-secondary: #2caec4;
  --color-dark: #161616;
  --color-dark-light: #2b2b2b;
}

* {
  font-family: "Libre Baskerville", "Oleo Script", serif;
  box-sizing: border-box;
}

#app {
  position: relative;
}
ul,
h1,
h2,
h3,
p,
input,
.nav-link {
  margin: 0;
  padding: 0;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}

li {
  list-style-type: none;
}
hr {
  margin: 0.5rem 0;
}
button {
  cursor: pointer;
}
.btn-animation {
  transition: 0.2s opacity;
}
.btn-animation:hover {
  opacity: 0.8;
  transform: translateY(2px);
}
.color-primary {
  color: var(--color-primary);
}
.color-tertiary {
  color: var(--color-secondary);
}
.app__route-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.app__modal-calc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
}
</style>
