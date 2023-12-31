<template>
  <div id="app">
    <the-header></the-header>
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
  font-family: "Libre Baskerville", serif;
}
</style>
