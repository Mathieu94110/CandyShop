<template>
  <transition appear>
    <div v-resize="setDimensions" class="navbar-container">
      <!-- On below dynamic style is used in order to change navbar 
  size with transition when user scroll on main content -->
      <div
        class="navbar"
        :style="{
          height: scrollActive && width >= 1320 ? 80 + 'px' : '',
          transition: 'height 0.8s',
        }"
      >
        <div class="burger-menu">
          <font-awesome-icon icon="fa-solid fa-bars" class="right-icons" />
          <span>Menu</span>
        </div>
        <div class="search-text">
          <SearchInputVue />
        </div>
        <div class="navbar-brand">
          <!-- Same case as above -->
          <div
            :class="[
              scrollActive && width >= 1320 ? 'logo-scroll-active' : 'logo',
            ]"
          >
            <img src="../../assets/candy-shop.png" class="candy-img" />
            <h1>Créateur de bonbons et gâteaux</h1>
          </div>
        </div>
        <div class="navbar-right-links">
          <HeaderRightLinksVue />
        </div>
      </div>
      <HeaderBottomLinksVue :menuList="menuList" />
    </div>
  </transition>
</template>

<script>
import SearchInputVue from "./Components/SearchInput.vue";
import HeaderRightLinksVue from "./Components/HeaderRightLinks.vue";
import HeaderBottomLinksVue from "./Components/HeaderBottomLinks.vue";

export default {
  data() {
    // width and isScrollActive are used together in order to change navbar width only for screen size >= 1320px
    return {
      scrollPosition: 0,
      width: document.documentElement.clientWidth,
      isScrollActive: false,
      menuList: [
        { text: "Gâteaux de Bonbons" },
        { text: "Bonbons" },
        { text: "Bonbons Rétro" },
        { text: "Bonbons Végan" },
        { text: "Bonbons Halal" },
        { text: "Ballons" },
        { text: "Idées cadeaux" },
      ],
    };
  },
  components: {
    SearchInputVue,
    HeaderRightLinksVue,
    HeaderBottomLinksVue,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setDimensions({ width }) {
      this.width = width;
    },
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
  mounted() {
    window.addEventListener("scroll", this.updateScroll, this.scrollActive);
  },
};
</script>

<style scoped>
.navbar-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: #161616;
  border-bottom: 2px solid #2caec4;
  position: sticky;
  z-index: 2;
  top: 0px;
}
.navbar {
  display: flex;
  position: relative;
  max-width: 100%;
  padding: 16px 15px;
  height: 80px;
}
.navbar-nav > :hover {
  cursor: pointer;
}
.candy-img {
  height: 50px;
  margin: auto;
}
.burger-menu {
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
}
.burger-menu > span {
  text-align: left !important;
}
.navbar-brand {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0px;
}
.logo {
  display: flex;
  flex-direction: column;
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
.navbar-right-links {
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 3;
  width: 80px;
  min-width: 15px;
  transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
}
.search-text {
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
@media only screen and (max-width: 993px) and (min-width: 600px) {
  .navbar-container {
    max-width: 100%;
  }
  .navbar {
    height: auto;
    padding: 8px 0;
  }
  .navbar-right-links {
    position: static;
    transform: none;
    flex: 1 1 auto;
    font-size: 12px;
  }
  .navbar-brand {
    position: static;
    transform: none;
  }
  .navbar-li {
    width: 25%;
    color: #fff;
  }
  .navbar-li-text {
    padding: 0;
  }
  .candy-img {
    width: 80px;
    height: 80px;
  }
  .burger-menu {
    position: static;
    padding: 13px 0 0 6px;
    transform: none;
  }
  .navbar-li-text {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
  }
  h1 {
    font-size: 14px;
  }
}
@media only screen and (max-width: 1000px) {
  .navbar-container {
    padding: 0 15px;
  }
}
@media only screen and (min-width: 1000px) {
  .navbar-container {
    display: block;
  }
  .navbar {
    padding: 12px 16px;
    max-width: 1140px;
    margin: auto;
  }
  .navbar-li {
    width: calc(100% / 3);
    color: #fff;
    cursor: pointer;
  }
  .navbar-li:first-child {
    display: none;
  }
  .navbar-li:hover {
    color: var(--color-primary);
  }
  .navbar-right-links {
    width: 380px;
  }
  .navbar-brand {
    position: static;
    transform: none;
  }
  .logo {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: height 1s;
  }
  .candy-img {
    width: 60px;
    margin: 0;
  }
  .burger-menu {
    display: none;
  }
  .search-text {
    display: flex;
  }
  .navbar-li-text {
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
  .logo-scroll-active {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: height 1s;
  }
  .logo-scroll-active > img {
    height: 100%;
    width: auto;
  }
  .candy-img {
    height: 160px;
    width: 160px;
  }
  .navbar {
    max-width: 1300px;
    height: 180px;
    transition: height 1s;
  }
  .navbar-li {
    color: #fff;
    cursor: pointer;
  }
  .navbar-li:hover {
    color: var(--color-primary);
  }
}
@keyframes fromright {
  from {
    transform: translateX(20px);
  }
  to {
  }
}
</style>
