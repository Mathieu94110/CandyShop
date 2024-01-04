<template>
  <div class="menu">
    <ul class="menu-list">
      <li v-for="item in menuList" :key="item.text">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      default() {
        return [{ text: "" }];
      },
    },
  },
};
</script>

<style scoped>
.logo {
  display: flex;
  flex-direction: column;
}

.menu {
  display: none;
}

@media only screen and (min-width: 1000px) {
  .menu {
    display: flex;
    background-color: #2b2b2b;
  }
  .menu-list {
    color: #fff;
    display: table;
    text-align: center;
    width: 100%;
    max-width: 1319px;
  }
  .menu-list > li {
    height: 64px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
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
