<template>
  <div
    class="w-25 p-3 product-container d-flex flex-column justify-content-between"
  >
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px" :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
<span>{{ product.price | price }}</span>
      <button
        class="btn btn-primary btn-sm float-right"
        @click="addProductToCart"
      >
        Commander
      </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from  '../../../../main';
export default {
  props: {
    product: {
      type: Object,
      default() {
        return { img: "", title: "", description: "", price: "" };
      },
    },
  },
  methods: {
    addProductToCart() {
      eventBus.addProductToCart({ ...this.product });
    },
  },
};
</script>

<style>
.product-container {
  height: 400px;
}
h3 {
  height: 68px;
  overflow: hidden;
}
p {
  font-size: 12px;
  height: 36px;
  overflow: hidden;
}
</style>
