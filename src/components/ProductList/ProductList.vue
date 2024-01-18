<template>
  <div>
    <div v-if="currentProducts.length">
      <Shop :products="currentProducts" />
    </div>
    <div v-else class="product-list__no-content">
      <h2 class="text-danger">Aucun article ne correspond à votre recherche</h2>
    </div>

    <Pagination
      v-if="productList.length > productPerPage"
      :totalPages="totalPages"
      :maxVisibleButtons="3"
      :perPage="productPerPage"
      :currentPage="currentPage"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Shop from "../Shop/Shop.vue";
import Pagination from "../Pagination/Pagination.vue";

export default {
  components: {
    Shop,
    Pagination,
  },
  props: {
    currentPage: Number,
    productPerPage: Number,
    productList: Array,
    currentProducts: Array,
    totalPages: Number,
  },
};
</script>

<style scoped>
.product-list__no-content {
  margin: 40px 0;
  text-align: center;
}
.product-list__no-content h2 {
  font-size: 16px;
}
@media only screen and (min-width: 992px) {
  .product-list__no-content {
    margin: 100px 0;
    font-size: 32px;
  }
  .product-list__no-content h2 {
    font-size: 32px;
  }
}
</style>
