<template>
  <shop-products-list :products="products" class="p-3"></shop-products-list>
</template>

<script>
import ShopProductsList from "@/components/Shop/ShopProductsList.vue";

export default {
  components: {
    ShopProductsList,
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

<style></style>
