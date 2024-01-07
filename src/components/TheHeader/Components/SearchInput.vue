<template>
  <div class="search-input-container">
    <form>
      <input
        type="text"
        :value="inputData"
        @keyup="$emit('input', $event.target.value)"
        placeholder="Rechercher"
        class="search-input"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="search-icon"
      />
    </form>
    <ul v-show="filteredList.length" class="filtered-list">
      <li
        v-for="product in filteredList"
        :key="product.id"
        class="search-input-product-item"
      >
        <span>{{ product.title }}</span>
        <span><img :src="product.img" class="search-input-product-img" /></span>
      </li>
    </ul>
    <div class="filtered-list" v-if="inputData && !filteredList.length">
      <p class="item-not-found">Aucun résultat trouvé !</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputData: String,
    filteredList: Array,
  },
  watch: {
    searchInput: {
      handler(newVal) {
        this.$emit("input", newVal);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.search-input-container {
  position: relative;
  max-width: 300px;
}
.search-input {
  width: 100%;
  border: none;
  padding: 5px 35px 5px 10px;
  color: #fff;
  font: 14px;
  height: 42px;
  background: #444444;
  border-right: 10px solid #444444;
  border-radius: 0;
  outline: none;
}
.search-input::placeholder {
  color: #fff;
}
.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  color: #fff;
}
.filtered-list {
  position: absolute;
  left: 0;
  top: 42;
  background: #444444;
  width: 100%;
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
