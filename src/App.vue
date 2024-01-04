<template>
  <div id="app">
    <TheHeader />
    <div class="d-flex flex-column w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
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
</style>
