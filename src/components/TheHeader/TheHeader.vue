<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">
      <img src="../../assets/candy-shop.png" width="50" height="50" />
      <h1>CandyShop</h1>
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'User'}"  @click="changePage('User')">Boutique</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'Admin'}"  @click="changePage('Admin')">Admin</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { eventBus } from '../../main';

export default {
  data() {
    return {
      page: eventBus.page
    }
  },
  methods: {
    changePage(page) {
      eventBus.changePage(page);
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
.navbar-nav > :hover {
  cursor: pointer;
}
h1 {
  display: inline;
  font-size: 1em;
  background-image: linear-gradient(225deg,#ff034f ,#289bff );
  filter: drop-shadow(0 20px 30px #28d8ff33);
  color: black;
  background-clip: text;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
}
</style>
