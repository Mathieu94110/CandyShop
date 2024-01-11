<template>
  <div class="d-flex flex-column p-5">
    <h4 class="border-bottom pb-3">Mon panier</h4>
    <template v-if="cart.length">
      <cart-product-item
        v-for="item in cart"
        :key="item.id"
        :item="item"
      ></cart-product-item>
      <hr class="w-100" />
      <span>Total : {{ total }} €</span>
    </template>
    <template v-else>Votre panier est vide</template>
  </div>
</template>

<script>
import CartProductItem from "./CartProductItem.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CartProductItem,
  },
  props: {
    cart: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters("cart", ["total"]),
  },
};
</script>

<style></style>
