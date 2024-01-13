<template>
  <div class="d-flex flex-row">
    <div class="shop-products-list">
      <shop-product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></shop-product-item>
    </div>
  </div>
</template>

<script>
import ShopProductItem from "./ShopProductItem.vue";

export default {
  components: {
    ShopProductItem,
  },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.shop-products-list {
  display: flex;
  flex-flow: row wrap;
  gap: 10px 20px;
}
</style>
