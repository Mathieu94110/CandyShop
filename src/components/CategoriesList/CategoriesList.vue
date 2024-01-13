<template>
  <div>
    <div v-if="productList.length">
      <Shop :products="currentProducts" />
    </div>
    <div v-else class="text-center">
      <h2 class="text-danger">Aucun article ne correspond à votre recherche</h2>
    </div>

    <Pagination
      v-if="productList.length > productPerPage"
      :totalPages="total"
      :maxVisibleButtons="3"
      :perPage="productPerPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Shop from "../Shop/Shop.vue";
import Pagination from "../Pagination/Pagination.vue";

export default {
  components: {
    Shop,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      productPerPage: 6,
      productList: [],
    };
  },
  created() {
    const category = this.$route.params.category;
    if (category) {
      this.getCategoryList(category);
    } else {
      this.productList = [...this.products];
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
          if (oldValue && !newValue) {
            // That means we navigated from another category list to advanced search category
            this.productList = [...this.products];
          } else {
            this.getCategoryList(newValue);
          }
        }
      },
    },
    // if we have new incoming value for categoryList getter we set produlctList with these data
    categoryList: {
      handler: function (data) {
        this.productList = [...data];
      },
    },
  },
};
</script>

<style scoped></style>
