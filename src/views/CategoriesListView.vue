<template>
  <div class="categories-list">
    <div v-if="categoryList">
      <Shop :products="currentProducts" />
    </div>
    <div v-else class="text-center">
      <h2 class="text-danger">
        Problème rencontré lors de la récupération des produits
      </h2>
    </div>

    <Pagination
      v-if="categoryList.length > productPerPage"
      :totalPages="total"
      :maxVisibleButtons="3"
      :perPage="productPerPage"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "../components/Shop/Shop.vue";
import Pagination from "../components/Pagination/Pagination.vue";

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
    this.getCategoryList(category);
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
    indexOfFirstProduct() {
      return this.indexOfLastProduct - this.productPerPage;
    },
    indexOfLastProduct() {
      return this.currentPage * this.productPerPage;
    },
    currentProducts() {
      return this.categoryList.slice(
        this.indexOfFirstProduct,
        this.indexOfLastProduct
      );
    },
    total() {
      return Math.floor(this.categoryList.length / 6) ===
        this.categoryList.length / 6
        ? this.categoryList.length / 6
        : Math.ceil(this.categoryList.length / 6);
    },
  },
  // watcher below is used when navigated between category links on same page
  watch: {
    "$route.params.category": {
      handler: function (newValue, oldValue) {
        if (newValue !== oldValue) {
          this.getCategoryList(newValue);
        }
      },
    },
  },
};
</script>

<style scoped>
.categories-list {
}
</style>
