<template>
  <div id="app">
    <TheHeader
      :menuList="menuList"
      :products="products"
      @switch-modal-display="switchModalDisplay"
    />
    <div class="d-flex flex-column w-100">
      <router-view></router-view>
    </div>
    <div v-if="modalIsVisible" class="modal-calc">
      <SearchModal @switch-modal-display="switchModalDisplay" />
    </div>
    <TheFooter :leftItems="leftItems" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";
import menuList from "./locales/menuList.json";
import leftItems from "./locales/headerLeftItems.json";
import SearchModal from "./components/searchModal/searchModal.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    SearchModal,
  },
  data() {
    return {
      menuList: menuList.list,
      leftItems: leftItems.items,
    };
  },
  methods: {
    switchModalDisplay() {
      this.$store.dispatch("product/switchModalDisplay");
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
  --color-tertiary: #4aae9b;
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
a:visited {
  color: #fff;
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
.carousel-container {
  width: 100%;
  height: 400px;
  padding: 0 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.modal-calc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
}
.color-primary {
  color: var(--color-primary);
}
.color-tertiary {
  color: var(--color-tertiary);
}
@media only screen and (min-width: 600px) {
  .carousel-container {
    padding: 0 20px;
  }
}
</style>
