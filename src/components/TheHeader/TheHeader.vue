<template>
  <transition appear>
    <div v-resize="setDimensions" class="the-header">
      <!-- On below dynamic style is used in order to change the navbar 
  size with transition when user scroll on main content -->
      <div
        class="the-header__navbar"
        :style="{
          height: scrollActive && width >= 1320 ? 80 + 'px' : '',
          transition: 'height 0.8s',
        }"
      >
        <div class="the-header__navbar-burger-menu">
          <font-awesome-icon
            icon="fa-solid fa-bars"
            class="right-icons"
            id="burgerIcon"
            @click="$emit('show-menu')"
          />
          <span>Menu</span>
        </div>
        <div class="the-header__navbar-search-text">
          <SearchInputVue
            :input-data="searchInput"
            :filtered-list="filteredResults"
            @input="setInputValue"
            @remove-list="removeFilteredResults"
            v-on="$listeners"
          />
        </div>
        <div class="the-header__navbar-brand">
          <!-- Same case as above -->
          <div
            :class="[
              scrollActive && width >= 1320
                ? 'the-header__navbar-brand-logo-scroll-active'
                : 'the-header__navbar-brand-logo',
            ]"
            id="candyLogo"
            @click="goToHome"
          >
            <img
              src="../../assets/candy-shop.png"
              class="the-header__navbar-brand-candy-img"
            />
            <h1>Créateur de bonbons et gâteaux</h1>
          </div>
        </div>
        <div class="the-header__navbar-right-links">
          <HeaderRightLinksVue v-on="$listeners" />
        </div>
      </div>
      <HeaderBottomLinksVue :menu-list="menuList" />
    </div>
  </transition>
</template>

<script>
import SearchInputVue from "@/components/TheHeader/Components/SearchInput/SearchInput.vue";
import HeaderRightLinksVue from "@/components/TheHeader/Components/HeaderRightLinks.vue";
import HeaderBottomLinksVue from "@/components/TheHeader/Components/HeaderBottomLinks.vue";

export default {
  components: {
    SearchInputVue,
    HeaderRightLinksVue,
    HeaderBottomLinksVue,
  },
  directives: {
    resize: {
      inserted(el, binding) {
        const onResizeCallback = binding.value;
        window.addEventListener("resize", () => {
          const width = document.documentElement.clientWidth;
          onResizeCallback({ width });
        });
      },
    },
  },
  props: {
    menuList: {
      type: Array,
    },
    products: {
      type: Array,
    },
  },
  data() {
    // width and isScrollActive are used together in order to change the-header__navbar width only for screen size >= 1320px
    return {
      scrollPosition: 0,
      width: document.documentElement.clientWidth,
      isScrollActive: false,
      searchInput: "",
      filteredResults: [],
      isSearchModalVisible: false,
    };
  },
  computed: {
    scrollActive() {
      return this.isScrollActive;
    },
  },
  watch: {
    scrollPosition(newValue) {
      if (newValue > 0) {
        if (this.width >= 1320) {
          this.isScrollActive = true;
        } else {
          this.isScrollActive = false;
        }
      } else {
        this.isScrollActive = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll, this.scrollActive);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setDimensions({ width }) {
      this.width = width;
    },
    setInputValue(value) {
      this.searchInput = value.toLowerCase();
      if (value.length) {
        this.filteredResults = this.products.filter((p) =>
          p.title.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      } else {
        this.filteredResults = [];
      }
    },
    removeFilteredResults() {
      this.filteredResults = [];
    },
    showModal() {
      this.$store.dispatch("product/switchModalDisplay");
    },
    goToHome() {
      if (this.$route.path != "/home") this.$router.replace({ path: "/" });
    },
  },
};
</script>

<style scoped>
.the-header {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: var(--color-dark);
  border-bottom: 2px solid #2caec4;
  position: sticky;
  z-index: 2;
  top: 0px;
}
.the-header__navbar {
  display: flex;
  position: relative;
  max-width: 100%;
  height: 80px;
  align-items: center;
}
.the-header__navbar-nav > :hover {
  cursor: pointer;
}
.the-header__navbar-brand-candy-img {
  height: 50px;
  margin: auto;
}
.the-header__navbar-burger-menu {
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 3;
  width: 33px;
  padding-left: 0;
  transform: translate(0, -50%);
  font-size: 11px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.the-header__navbar-burger-menu > span {
  text-align: left !important;
}
.the-header__navbar-brand {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0px;
}
.the-header__navbar-brand-logo {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
h1 {
  display: inline;
  font-size: 0.8em;
  background-image: linear-gradient(349.19deg, #cf1e34 0%, #ee365f 100%);
  filter: drop-shadow(0 20px 30px #28d8ff33);
  color: black;
  background-clip: text;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  font-size: 11px;
  margin: 6px 0;
  font-weight: 600;
}
.v-enter-active {
  animation: fromtop 1s;
}
.the-header__navbar-right-links {
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 3;
  width: 80px;
  min-width: 15px;
  transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
}
.the-header__navbar-search-text {
  display: none;
}
@keyframes fromtop {
  from {
    transform: translateY(-20px);
  }
  to {
  }
}

.right-icons {
  height: 25px;
}
@media only screen and (max-width: 999px) and (min-width: 600px) {
  .the-header {
    max-width: 100%;
  }
  .the-header__navbar {
    padding: 8px 0;
  }
  .the-header__navbar-right-links {
    position: static;
    transform: none;
    flex: 1 1 auto;
    font-size: 12px;
  }
  .the-header__navbar-brand {
    position: static;
    transform: none;
    padding: 0;
  }
  .the-header__navbar-li {
    width: 25%;
    color: #fff;
  }
  .the-header__navbar-li-text {
    padding: 0;
  }
  .the-header__navbar-brand-candy-img {
    margin-left: 20px;
    width: 60px;
    height: 60px;
  }
  .the-header__navbar-burger-menu {
    position: static;
    transform: none;
  }
  .the-header__navbar-li-text {
    margin: auto;
    font-size: 11px;
    font-weight: 600;
  }
  h1 {
    display: none;
  }
}
@media only screen and (max-width: 1000px) {
  .the-header {
    padding: 0 15px;
  }
}
@media only screen and (min-width: 1000px) {
  .the-header {
    display: block;
  }
  .the-header__navbar {
    padding: 12px 16px;
    max-width: 1140px;
    margin: auto;
  }
  .the-header__navbar-li {
    width: calc(100% / 3);
    color: #fff;
    cursor: pointer;
  }
  .the-header__navbar-li:first-child {
    display: none;
  }
  .the-header__navbar-li:hover {
    color: var(--color-primary);
  }
  .the-header__navbar-right-links {
    width: 380px;
  }
  .the-header__navbar-brand {
    position: static;
    transform: none;
  }
  .the-header__navbar-brand-logo {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: height 0.8s;
  }
  .the-header__navbar-brand-candy-img {
    width: 60px;
    margin: 0;
  }
  .the-header__navbar-burger-menu {
    display: none;
  }
  .the-header__navbar-search-text {
    display: flex;
  }
  .the-header__navbar-li-text {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    padding: 0;
  }
  h1 {
    font-size: 14px;
    margin-top: 0;
  }
}
@media only screen and (min-width: 1320px) {
  .the-header__navbar-brand-logo-scroll-active {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: height 0.8s;
  }
  .the-header__navbar-brand-logo-scroll-active > img {
    height: 100%;
    width: auto;
  }
  .the-header__navbar-brand-candy-img {
    height: 160px;
    width: 160px;
    transition: height 0.8s;
  }
  .the-header__navbar {
    max-width: 1300px;
    height: 180px;
    transition: height 0.8s;
  }
  .the-header__navbar-li {
    color: #fff;
  }
  .the-header__navbar-li:hover {
    color: var(--color-primary);
  }
}
</style>
