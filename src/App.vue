<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <component :is="page" ></component>
    </div>
  </div>
</template>

<script>
import { eventBus } from './main';
import User from './components/features/User/User';
import Admin from './components/features/Admin/Admin';
import TheHeader from "./components/TheHeader/TheHeader.vue";

export default {
  name: 'app',
  components: {
    TheHeader,
    User,
    Admin
  },
  data() {
    return {
      page: eventBus.page
    }
  },
  created() {
    eventBus.$on('update:page', (page) => {
      this.page = page;
    })
  }
}
</script>


<style>
* {
  font-family: "Libre Baskerville", serif;
}
</style>
