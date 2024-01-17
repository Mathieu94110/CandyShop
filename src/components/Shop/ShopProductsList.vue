<template>
  <div class="shop-products-list-container">
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
.shop-products-list-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.shop-products-list {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 10px 20px;
}
@media screen and (min-width: 660px) {
  .shop-products-list {
    justify-content: flex-start;
  }
}
</style>
