<template>
  <transition appear>
    <div class="navbar-container">
      <div class="navbar">
        <div class="burger-menu">
          <font-awesome-icon icon="fa-solid fa-bars" class="right-icons" />
          <span>Menu</span>
        </div>
        <div class="search-text">
          <SearchInputVue />
        </div>
        <div class="navbar-brand">
          <div class="logo">
            <img src="../../assets/candy-shop.png" class="candy-img" />
            <h1>Créateur de bonbons et gâteaux</h1>
          </div>
        </div>
        <div class="navbar-right-links">
          <ul class="clear-float">
            <li class="navbar-li">
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                class="right-icons"
              />
              <span class="navbar-li-text pt-2">Rechercher</span>
            </li>
            <li class="navbar-li">
              <font-awesome-icon
                icon="fa-solid fa-mobile-retro"
                class="right-icons"
              />
              <span class="navbar-li-text pt-2">0101010101</span>
            </li>
            <li class="navbar-li">
              <font-awesome-icon icon="fa-solid fa-user" class="right-icons" />
              <span class="navbar-li-text pt-2">Mon compte</span>
            </li>
            <li class="navbar-li">
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="right-icons"
              />
              <span class="navbar-li-text pt-2">Mon panier</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu">
        <ul class="menu-list">
          <li v-for="item in menuList" :key="item.text">
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import SearchInputVue from "../features/User/SearchInput/SearchInput.vue";
export default {
  data() {
    return {
      scrollPosition: 0,
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
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener("click", () => {
          nav.classList.remove("show");
        });
        const nav = document.querySelector(`#${binding.value}`);
        el.addEventListener("click", (e) => {
          if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          } else {
            nav.classList.add("show");
          }
          e.stopPropagation();
        });
      },
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
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
}
.navbar {
  height: 80px;
  z-index: 10;
  display: flex;
  position: relative;
  max-width: 100%;
  padding: 16px 15px;
}
.navbar-nav > :hover {
  cursor: pointer;
}
.candy-img {
  width: 50px;
  height: 50px;
  margin: auto;
}
.burger-menu {
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 9;
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
}
.v-enter-active {
  animation: fromtop 1s;
}
.navbar-right-links {
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 99;
  width: 80px;
  min-width: 15px;
  transform: translate(0, -50%);
  -webkit-transform: translate(0, -50%);
}
.clear-float {
  display: flex;
  flex-direction: row;
}
.clear-float::after {
  content: "";
  display: block;
  clear: both;
}
.navbar-li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu {
  display: none;
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

@media (max-width: 599px) {
  .navbar-li {
    width: 50%;
    color: #fff;
  }
  .navbar-li:nth-child(-n + 2) {
    display: none;
  }
  .navbar-li-text {
    display: none;
  }
  .clear-float {
    max-width: 100%;
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
    height: 180px;
    padding: 8px 16px;
    max-width: 1140px;
    margin: auto;
  }
  .menu {
    display: flex;
    background-color: #2b2b2b;
  }
  .menu-list {
    color: #fff;
    display: table;
    text-align: center;
    width: 100%;
    max-width: 1220px;
  }
  .menu-list > li {
    height: 64px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
  }
  .menu-list > li:hover {
    background-color: #2caec4;
    cursor: pointer;
  }
  .navbar-right-links {
    width: 380px;
  }
  .clear-float {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .navbar-brand {
    position: static;
    transform: none;
  }
  .logo {
    width: 275px;
    height: 142px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .navbar-li:first-child {
    display: none;
  }
  .navbar-li {
    width: calc(100% / 3);
    color: #fff;
    cursor: pointer;
  }
  .navbar-li:hover {
    color: #ff4089;
  }
  .candy-img {
    width: 160px;
    height: 160px;
    margin: 0;
  }
  .burger-menu {
    display: none;
  }
  .search-text {
    display: flex;
  }
  .search-menu {
    width: 100%;
    border: none;
    padding: 5px 35px 5px 10px;
    color: #fff;
    font: 14px "Gotham-Medium";
    height: 42px;
    background: #444444;
    border-right: 10px solid #444444;
    border-radius: 0;
    -webkit-border-radius: 0;
  }
  .navbar-li-text {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    padding: 0;
  }
  h1 {
    font-size: 14px;
  }
}
@media only screen and (min-width: 1320px) {
  .navbar {
    max-width: 1300px;
  }
  .menu-list {
    margin: auto;
  }
  .navbar-li {
    color: #fff;
    cursor: pointer;
  }
  .navbar-li:hover {
    color: #ff4089;
  }
}
</style>
