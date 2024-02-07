<template>
  <div>
    <ProductListList
      :current-page="currentPage"
      :product-per-page="productPerPage"
      :product-list="productList"
      :current-products="currentProducts"
      :total-pages="total"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ProductListList from "@/components/ProductList/ProductList.vue";

export default {
  components: {
    ProductListList,
  },
  data() {
    return {
      currentPage: 1,
      productPerPage: 6,
      productList: [],
    };
  },
  computed: {
    ...mapGetters("product", ["categoryList"]),
    ...mapState("product", {
      products: "datas",
    }),
    indexOfFirstProduct() {
      return this.indexOfLastProduct - this.productPerPage;
    },
    indexOfLastProduct() {
      return this.currentPage * this.productPerPage;
    },
    currentProducts() {
      return this.productList.slice(
        this.indexOfFirstProduct,
        this.indexOfLastProduct
      );
    },
    total() {
      return Math.floor(this.productList.length / 6) ===
        this.productList.length / 6
        ? this.productList.length / 6
        : Math.ceil(this.productList.length / 6);
    },
  },
  // watcher below is used when navigated between category links on same page (component)
  watch: {
    "$route.params.category": {
      handler: function (newValue, oldValue) {
        if (newValue !== oldValue) {
          this.currentPage = 1;
          this.getCategoryList(newValue);
        }
      },
    },
    // if we have new incoming value for categoryList getter we set productList with these data
    categoryList: {
      handler: function (data) {
        this.productList = [...data];
      },
    },
  },
  created() {
    const category = this.$route.params.category;
    if (category) {
      this.getCategoryList(category);
    }
  },
  methods: {
    getCategoryList(payload) {
      this.$store.dispatch("product/getCategoryList", payload);
    },
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
