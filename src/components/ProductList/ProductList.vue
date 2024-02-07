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
      :total-pages="totalPages"
      :max-visible-buttons="3"
      :per-page="productPerPage"
      :current-page="currentPage"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Shop from "@/components/Shop/Shop.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

export default {
  components: {
    Shop,
    Pagination,
  },
  props: {
    currentPage: { type: { Number }, default: 1 },
    productPerPage: { type: { Number }, default: 0 },
    productList: {
      type: Array,
      default() {
        return [];
      },
    },
    currentProducts: {
      type: Array,
      default() {
        return [];
      },
    },
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
