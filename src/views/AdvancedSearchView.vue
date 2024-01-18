<template>
  <div>
    <div class="advanced-search-view__top">
      <div class="advanced-search-view__top-container">
        <div class="advanced-search-view__top-container-content">
          <div class="text-center">
            <h1 class="advanced-search-view__top-container-content-title">
              {{
                isSearchActive
                  ? "Résultat de recherche pour"
                  : "Recherche avec plusieurs critères"
              }}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="advanced-search-view__bottom-sub-title">
        Nous recherchons les meilleurs résultats selon vos critères
      </h2>
    </div>
    <SearchCategoriesForm
      @updateSelection="updateCheckedCategories"
      @priceRange="updatePrice"
    />
    <ProductList
      :productList="filteredProducts"
      :currentPage="currentPage"
      :totalPages="total"
      :productPerPage="productPerPage"
      :currentProducts="currentProducts"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductList from "../components/ProductList/ProductList.vue";
import SearchCategoriesForm from "../components/SearchCategoriesForm/SearchCategoriesForm.vue";
import { filteredSearch } from "../utils/filteredSearch";

export default {
  data() {
    return {
      currentPage: 1,
      productPerPage: 6,
      isSearchActive: false,
      filteredProducts: [],
      filteredOptions: {
        price: { "min price": null, "max price": null },
        category: [],
        batch: [],
        bag: [],
      },
    };
  },
  components: {
    SearchCategoriesForm,
    ProductList,
  },
  methods: {
    updateCheckedCategories(selection) {
      this.filteredOptions[selection.filter] = [
        ...selection.options.map((v) => v.label),
      ];
      this.currentPage = 1;
    },
    updatePrice(selection) {
      this.filteredOptions.price[selection.target] = selection.value;
      if (
        (selection.target === "min price" && selection.value !== 0) ||
        selection.target === "max price"
      )
        this.currentPage = 1;
    },
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
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
      return this.filteredProducts.slice(
        this.indexOfFirstProduct,
        this.indexOfLastProduct
      );
    },
    total() {
      return Math.floor(this.filteredProducts.length / 6) ===
        this.filteredProducts.length / 6
        ? this.filteredProducts.length / 6
        : Math.ceil(this.filteredProducts.length / 6);
    },
  },
  watch: {
    products: {
      handler: function (data) {
        this.filteredProducts = [...data];
      },
      immediate: true,
    },
    filteredOptions: {
      handler(newValue) {
        this.filteredProducts = filteredSearch(this.products, newValue);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.advanced-search-view__top {
  padding: 20px 0 40px 0;
  background: url(https://png.pngtree.com/thumb_back/fh260/background/20201128/pngtree-colorful-polka-dot-background-image_500722.jpg)
    repeat top center;
  margin-bottom: 40px;
}
.advanced-search-view__top-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.advanced-search-view__top-container-content {
  background: #fff;
  padding: 17px 20px;
}
.advanced-search-view__top-container-content-title {
  font-size: 20px;
  color: #ff4089;
  padding: 10px;
  line-height: 80%;
  margin: 2% 0;
}
.advanced-search-view__bottom-sub-title {
  text-align: center;
  font-size: 15px;
  padding: 0 10px 16px;
}

@media only screen and (max-width: 767px) {
  .advanced-search-view__top {
    margin-bottom: 20px;
    padding-top: 9px;
  }
  .advanced-search-view__top-container-content {
    padding: 10px;
  }
}

@media only screen and (max-width: 1250px) {
  .advanced-search-view__top-container {
    max-width: 100%;
  }
}

@media only screen and (min-width: 480px) {
  .advanced-search-view__top-container-content-title {
    font-size: 28px;
  }
  .advanced-search-view__bottom-sub-title {
    font-size: 19px;
  }
}

@media only screen and (min-width: 600px) {
  .advanced-search-view__top-container-content-title {
    font-size: 32px;
  }
  .advanced-search-view__bottom-sub-title {
    font-size: 23px;
  }
}

@media only screen and (min-width: 992px) {
  .advanced-search-view__top-container-content-title {
    margin: 10px 0;
    font-size: 38px;
  }
  .advanced-search-view__bottom-sub-title {
    font-size: 30px;
  }
}
</style>
