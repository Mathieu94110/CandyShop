<template>
  <nav class="menu">
    <ul class="menu-list">
      <router-link
        tag="li"
        v-for="item in menuList"
        :key="item.text"
        :to="{
          path: item.name ? `/categories-list/${item.name}` : item.path,
        }"
        :class="{ active: active }"
      >
        {{ item.text }}</router-link
      >
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.menu {
  display: none;
}

@media only screen and (min-width: 1000px) {
  .menu {
    display: flex;
    background-color: var(--color-dark-light);
  }
  .menu-list {
    color: #fff;
    display: table;
    text-align: center;
    width: 100%;
    max-width: 1319px;
    height: 64px;
  }
  .menu-list > li {
    height: 100%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
  }
  .menu-list > li > a {
    color: #fff;
  }
  .menu-list > li > a.router-link-exact-active {
    color: var(--color-primary);
  }

  .menu-list > li:hover {
    background-color: var(--color-secondary);
    cursor: pointer;
  }
}
@media only screen and (min-width: 1320px) {
  .menu-list {
    margin: auto;
  }
}
</style>
