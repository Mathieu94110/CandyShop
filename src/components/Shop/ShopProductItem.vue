<template>
  <div class="shop-product-item" @click="goToDetails(product.id)">
    <div class="shop-product-item__img-container">
      <img :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p class="shop-product-item__description">{{ product.description }}</p>
    </div>
    <div class="mt-2">
      <span class="shop-product-item__price">{{ product.price | price }}</span>
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
.shop-product-item {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 200px;
  max-width: 200px;
  border: 1px dashed #000;
  background-color: #fff;
  cursor: pointer;
}

.shop-product-item__img-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.shop-product-item__img-container > img {
  height: 150px;
}

.shop-product-item__description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shop-product-item__price,
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
  .shop-product-item {
    height: auto;
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
  .shop-product-item {
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
