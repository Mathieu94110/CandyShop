<template>
  <div class="cart-product-item">
    <span
      ><strong>{{ item.quantity }}</strong></span
    >
    <span class="cart-product-item__title">{{ item.title }}</span>
    <span
      ><strong>{{ item.price | price }}</strong></span
    >
    <button class="close" @click="deleteOne(item.id)">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return { title: "", price: null };
      },
    },
  },
  methods: {
    ...mapMutations("cart", ["deleteOne"]),
  },
};
</script>

<style>
.cart-product-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
}
.cart-product-item__title {
  width: 130px;
}
</style>
