<template>
  <div
    class="p-3 product-container d-flex flex-column justify-content-between mx-2"
    @click="goToDetails(product.id)"
  >
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px" :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p class="product-description">{{ product.description }}</p>
    </div>
    <div class="mt-2">
      <span class="product-price">{{ product.price | price }}</span>
      <button
        class="btn btn-sm float-right text-white btn-animation"
        style="background: var(--color-secondary)"
        @click.stop="addOne(product)"
      >
        Commander
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return { img: "", title: "", description: "", price: "", id: "" };
      },
    },
  },
  methods: {
    ...mapMutations("cart", ["addOne"]),
    goToDetails(id) {
      this.$router.push({ name: "product", params: { productId: id } });
    },
  },
};
</script>

<style scoped>
.product-container {
  height: auto;
  width: 200px;
  max-width: 200px;
  border: 1px dashed #000;
  margin: 0 10px;
  background-color: #fff;
  cursor: pointer;
}
.product-description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price,
h3 {
  font: 600;
  font-family: "Oleo Script";
  color: var(--color-primary);
}
h3 {
  height: 68px;
  overflow: hidden;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 12px;
  height: 36px;
  white-space: initial;
  text-align: center;
}
button {
  font-size: 11px;
}
@media only screen and (min-width: 600px) {
  .product-container {
    height: auto;
    width: auto;
    max-width: 300px;
  }
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
    height: 36px;
  }
  button {
    font-size: 13px;
  }
}

@media only screen and (min-width: 1200px) {
  .product-container {
    height: auto;
    width: 300px;
  }
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 14px;
    height: 36px;
  }
}
</style>
