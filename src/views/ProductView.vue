<template>
  <div>
    <div class="go-back-container">
      <button class="go-back-button" @click.prevent="goBack()">
        <font-awesome-icon icon="arrow-left" color="gray" />
      </button>
    </div>

    <ProductDetails :info="productInfo[0]" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    goBack() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters("product", ["productInfo"]),
  },
  // evey time url params change we refresh card data
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
.go-back-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  width: 100%;
  margin-left: 20px;
}
.go-back-button {
  width: 80px;
  height: 30px;
  border-radius: 4px;
  box-shadow: rgb(60 64 67 / 15%) 0px 2px 6px 2px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}
</style>
