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
* {
  font-family: "Libre Baskerville", "Oleo Script", serif;
  box-sizing: border-box;
}
ul,
h1,
h2,
h3,
p,
input {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
