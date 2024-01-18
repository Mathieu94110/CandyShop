<template>
  <nav class="header-bottom-links">
    <ul class="header-bottom-links__list">
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
.header-bottom-links {
  display: none;
}

@media only screen and (min-width: 1000px) {
  .header-bottom-links {
    display: flex;
    background-color: var(--color-dark-light);
  }
  .header-bottom-links__list {
    color: #fff;
    display: table;
    text-align: center;
    width: 100%;
    max-width: 1319px;
    height: 64px;
  }
  .header-bottom-links__list > li {
    height: 100%;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
  }
  .header-bottom-links__list > li > a {
    color: #fff;
  }

  .header-bottom-links__list > li:hover {
    background-color: var(--color-secondary);
    cursor: pointer;
  }
}
@media only screen and (min-width: 1320px) {
  .header-bottom-links__list {
    margin: auto;
  }
}
</style>
