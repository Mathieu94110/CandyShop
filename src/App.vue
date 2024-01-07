<template>
  <div id="app">
    <TheHeader :menuList="menuList" />
    <div class="d-flex flex-column w-100">
      <router-view></router-view>
    </div>
    <TheFooter :leftItems="leftItems" />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";
import menuList from "./locales/menuList.json";
import leftItems from "./locales/headerLeftItems.json";

export default {
  name: "App",
  data() {
    return {
      menuList: menuList.list,
      leftItems: leftItems.items,
    };
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
:root {
  --color-primary: #ff4089;
  --color-secondary: #2caec4;
}

* {
  font-family: "Libre Baskerville", "Oleo Script", serif;
  box-sizing: border-box;
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

@media only screen and (min-width: 600px) {
  .carousel-container {
    padding: 0 20px;
  }
}
</style>
