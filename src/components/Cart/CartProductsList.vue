<template>
  <div class="cart-products-list">
    <h4 class="cart-product-list__title">Mon panier</h4>
    <template v-if="cart.length">
      <cart-product-item
        v-for="item in cart"
        :key="item.id"
        :item="item"
      ></cart-product-item>
      <hr class="w-100" />
      <span>Total : {{ total.toFixed(2) }} €</span>
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

<style>
.cart-products-list {
  display: flex;
  flex-direction: column;
  padding: 48px;
}
.cart-products-list__title {
  border-bottom: 1px solid var(--color-dark);
  padding-bottom: 12px;
}
</style>
