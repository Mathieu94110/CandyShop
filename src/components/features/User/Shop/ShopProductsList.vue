<template>
  <div class="d-flex flex-row">
    <div class="d-flex flex-col justify-between flex-wrap p-1">
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
        return [{ img: "", title: "", description: "", price: "" }];
      },
    },
  },
};
</script>

<style></style>
