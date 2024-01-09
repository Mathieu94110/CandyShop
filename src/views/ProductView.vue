<template>
  <div class="product">
    <div class="product-container">
      <div class="go-back">
        <button class="go-back-button" @click.prevent="goBack()">
          <font-awesome-icon icon="arrow-left" class="go-back-button-icon" />
        </button>
      </div>

      <ProductDetails :info="productInfo[0]" @add-to-cart="addOne" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductDetails from "../components/productDetails.vue";
export default {
  data() {
    return {
      productDetails: null,
    };
  },
  components: {
    ProductDetails,
  },
  created() {
    let productId = this.$route.params.productId;
    if (productId) {
      this.$store.dispatch("product/getProductDetails", productId);
    }
  },
  methods: {
    ...mapMutations("cart", ["addOne"]),
    goBack() {
      this.$router.push("/");
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

<style>
.product {
  padding: 10px;
  background-color: #ffe469;
}
.product-container {
  max-width: 1200px;
  margin: auto;
}
.go-back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
}
.go-back-button {
  width: 36px;
  padding: 4px;
  color: #2b2b2b;
  font-weight: 600;
  cursor: pointer;
}
.go-back-button:hover {
  background-color: #2b2b2b;
  color: #ffffff;
}
.go-back-button-icon {
  color: #2b2b2b;
}
.go-back-button:hover .go-back-button-icon {
  color: #ffffff;
}

@media only screen and (max-width: 767px) and (min-width: 450px) {
  .product-container {
    width: 70%;
  }
}

@media only screen and (min-width: 768px) {
  .product {
    padding: 20px;
  }
  .product-container {
    margin: 50px auto;
  }
  .go-back {
    margin: 20px 0;
  }
  .go-back-button {
    width: 50px;
  }
}
</style>
