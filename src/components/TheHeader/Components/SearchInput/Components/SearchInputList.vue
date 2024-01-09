<template>
  <div>
    <ul v-show="filteredList.length" class="filtered-list" ref="listElement">
      <li
        v-for="product in filteredList"
        :key="product.id"
        class="search-input-product-item"
        @click="goToPageDetails(product.id)"
      >
        <span>{{ product.title }}</span>
        <span><img :src="product.img" class="search-input-product-img" /></span>
      </li>
    </ul>
    <div
      class="filtered-list"
      v-show="isSearchActive && inputData && !filteredList.length"
    >
      <p class="item-not-found">Aucun résultat trouvé !</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSearchActive: false,
    };
  },
  props: {
    filteredList: Array,
    inputData: String,
  },
  methods: {
    handleClickOutside(event) {
      const filteredlistElement = this.$refs.listElement;
      if (!filteredlistElement.contains(event.target)) {
        this.$emit("remove-list");
        this.isSearchActive = false;
      }
    },
    goToPageDetails(id) {
      this.$emit("remove-list");
      this.$router.push({ name: "product", params: { productId: id } });
    },
  },

  //watcher below is used to not display no results text when filteredResults is set to [] on TheHeader
  watch: {
    inputData(newValue) {
      if (newValue.length) {
        this.isSearchActive = true;
      } else {
        this.isSearchActive = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // Remove the click event listener when the component is about to be destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.filtered-list {
  position: absolute;
  left: 0;
  background: #444444;
  width: 100%;
  z-index: 4;
}
.search-input-product-item,
.item-not-found {
  padding: 12px 8px;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.search-input-product-item:hover {
  cursor: pointer;
  background: #fff;
  color: #444444;
}

.search-input-product-img {
  width: 30px;
  height: auto;
}
</style>
