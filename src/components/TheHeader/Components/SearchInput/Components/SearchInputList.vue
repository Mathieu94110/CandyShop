<template>
  <div>
    <ul
      v-show="filteredList.length"
      ref="listElement"
      class="search-input-list__list"
    >
      <li
        v-for="product in filteredList"
        :key="product.id"
        class="search-input-list__list-item"
        @click="goToPageDetails(product.id)"
      >
        <span>{{ product.title }}</span>
        <span
          ><img :src="product.img" class="search-input-list__list-img"
        /></span>
      </li>
    </ul>
    <div
      v-show="isSearchActive && inputData && !filteredList.length"
      class="search-input-list__list"
    >
      <p class="search-input-list__not-found">Aucun résultat trouvé !</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filteredList: {
      type: Object,
      default: () => ({ id: Number, title: String, img: String }),
    },
    inputData: { type: String, default: "" },
  },
  data() {
    return {
      isSearchActive: false,
    };
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
};
</script>

<style scoped>
.search-input-list__list {
  position: absolute;
  left: 0;
  background: #444444;
  width: 100%;
  z-index: 4;
  max-height: 300px;
  overflow-y: scroll;
}
.search-input-list__list-item,
.search-input-list__not-found {
  padding: 12px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.search-input-list__list-item:hover {
  cursor: pointer;
  background: #fff;
  color: #444444;
}

.search-input-list__list-img {
  width: 30px;
  height: auto;
}
</style>
