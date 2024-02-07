<template>
  <div
    class="burger-menu"
    :class="[showMobileMenu ? 'burger-menu--open' : 'burger-menu--closed']"
  >
    <div class="burger-menu__nav">
      <ul class="burger-menu__nav-items">
        <li id="searchItem" @click="displaySearchModal">Rechercher</li>
        <li
          v-for="item in menuList"
          :key="item.text"
          @click="goToPageLink(item)"
        >
          {{ item.text }}
        </li>
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
  methods: {
    displaySearchModal() {
      this.$emit("switch-modal-display");
      this.$emit("close-menu");
    },
    goToPageLink(item) {
      this.$emit("close-menu");
      if (
        item.name &&
        `/categories-list/${item.name}` !== this.$route.fullPath
      ) {
        this.$router.replace({
          path: `/categories-list/${item.name}`,
        });
      } else if (!item.name && item.path) {
        if (this.$route.path !== item.path) {
          this.$router.replace({
            path: item.path,
          });
        }
      }
    },
  },
};
</script>

<style>
.burger-menu {
  display: none;
}
.burger-menu__nav-items li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
}
@media screen and (min-width: 600px) {
  .burger-menu__nav-items li {
    font-size: 14px;
  }
}
@media screen and (max-width: 1000px) {
  .burger-menu {
    display: block;
    position: sticky;
    width: 100%;
    z-index: 1;
    top: 80px;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    color: white;
    height: auto;
  }
  .burger-menu--open {
    height: auto;
    z-index: 2;
    position: absolute;
  }
  .burger-menu--closed {
    display: none;
  }
  .burger-menu__nav {
    display: flex;
    flex-direction: column;
    z-index: 100;
    padding: 10px 0;
    position: relative;
    transition: all 0.4s ease-out;
  }
  .burger-menu__nav-items {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
