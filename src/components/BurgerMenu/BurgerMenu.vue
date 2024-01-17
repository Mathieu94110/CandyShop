<template>
  <div class="nav-menu" :class="[showMobileMenu ? 'open-menu' : 'closed-menu']">
    <div
      :class="[showMobileMenu ? 'open-menu' : 'closed-menu']"
      class="nav-content"
    >
      <ul class="nav-items">
        <li @click="$emit('switch-modal-display')">Rechercher</li>
        <router-link
          tag="li"
          v-for="item in menuList"
          :key="item.text"
          :to="{
            path: item.name ? `/categories-list/${item.name}` : item.path,
          }"
        >
          {{ item.text }}</router-link
        >
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showMobileMenu: Boolean,
    menuList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.nav-menu {
  display: none;
}
.nav-items li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
}
@media screen and (min-width: 600px) {
  .nav-items li {
    font-size: 14px;
  }
}
@media screen and (max-width: 1000px) {
  .nav-menu {
    display: block;
    position: sticky;
    width: 100%;
    z-index: 1;
    top: 80px;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    color: white;
  }
  .open-menu {
    height: auto;
    z-index: 2;
  }
  .closed-menu {
    display: none;
  }
  .nav-content {
    display: flex;
    flex-direction: column;
    z-index: 100;
    padding: 10px 0;
    position: relative;
    transition: all 0.4s ease-out;
  }
  .nav-items {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
