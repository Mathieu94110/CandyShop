<template>
  <div>
    <cart-products-list :cart="cart" class="p-3"></cart-products-list>
  </div>
</template>

<script>
import CartProductsList from "@/components/Cart/CartProductsList.vue";

export default {
  components: {
    CartProductsList,
  },
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
