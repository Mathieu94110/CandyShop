<template>
  <div class="product-view">
    <div class="product-view__product">
      <div class="product-view__product-go-back">
        <button
          class="product-view__product-go-back-button"
          @click.prevent="goBack()"
        >
          <font-awesome-icon
            icon="arrow-left"
            class="product-view__product-go-back-button-icon"
          />
        </button>
      </div>
      <ProductDetails :info="productInfo[0]" @add-to-cart="addOne" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductDetails from "@/components/ProductDetails/ProductDetails.vue";
export default {
  components: {
    ProductDetails,
  },
  data() {
    return {
      productDetails: null,
    };
  },
  created() {
    let productId = Number(this.$route.params.productId);
    if (productId) {
      this.$store.dispatch("product/getProductDetails", productId);
    }
  },
  methods: {
    ...mapMutations("cart", ["addOne"]),
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters("product", ["productInfo"]),
  },
  // evey time url params change we refresh card data
  // it will be use when suggests category will be implement on this view
  watch: {
    "$route.params.productId": {
      handler: function (productId) {
        this.$store.dispatch("product/getProductDetails", productId);
      },
    },
  },
};
</script>

<style scoped>
.product-view {
  padding: 10px;
  background: url(https://png.pngtree.com/thumb_back/fh260/background/20201128/pngtree-colorful-polka-dot-background-image_500722.jpg)
    repeat top center;
}
.product-view__product {
  max-width: 1200px;
  margin: auto;
}
.product-view__product-go-back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
}
.product-view__product-go-back-button {
  width: 36px;
  padding: 4px;
  color: var(--color-dark-light);
  background: #fff;
  font-weight: 600;
  cursor: pointer;
}
.product-view__product-go-back-button:hover {
  background-color: var(--color-dark-light);
  color: #ffffff;
}
.product-view__product-go-back-button-icon {
  color: var(--color-dark-light);
}
.product-view__product-go-back-button:hover
  .product-view__product-go-back-button-icon {
  color: #ffffff;
}

@media only screen and (max-width: 767px) and (min-width: 450px) {
  .product-view__product {
    width: 70%;
  }
}

@media only screen and (min-width: 768px) {
  .product-view {
    padding: 20px;
  }
  .product-view__product {
    margin: 50px auto;
  }
  .product-view__product-go-back {
    margin: 20px 0;
  }
  .product-view__product-go-back-button {
    width: 50px;
  }
}
</style>
