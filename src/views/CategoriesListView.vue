<template>
  <div>
    <div v-if="isAdvancedSearchView">
      <div class="categories-list-top-container">
        <div class="categories-list-top">
          <div class="bg-white-category">
            <div class="text-center">
              <h1 class="categories-list-title">
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
        <h2 class="categories-list-sub-title">
          Nous recherchons les meilleurs résultats selon vos critères
        </h2>
      </div>
      <SearchCategoriesForm
        @updateSelection="updateCheckedCategories"
        @priceRange="updatePrice"
      />
    </div>
    <CategoriesList :filteredProducts="filteredProducts" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchCategoriesForm from "../components/SearchCategoriesForm/SearchCategoriesForm.vue";
import CategoriesList from "../components/CategoriesList/CategoriesList.vue";

export default {
  data() {
    return {
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
    CategoriesList,
  },
  methods: {
    updateCheckedCategories(selection) {
      this.filteredOptions[selection.filter] = [
        ...selection.options.map((v) => v.label),
      ];
    },
    updatePrice(selection) {
      this.price[selection.target] = selection.value;
    },
  },
  computed: {
    ...mapState("product", {
      products: "datas",
    }),
    isAdvancedSearchView() {
      return !this.$route.params.category;
    },
  },
};
</script>

<style scoped>
.categories-list-top-container {
  padding: 20px 0 40px 0;
  background: url(https://png.pngtree.com/thumb_back/fh260/background/20201128/pngtree-colorful-polka-dot-background-image_500722.jpg)
    repeat top center;
  margin-bottom: 40px;
}
.categories-list-top {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.bg-white-category {
  background: #fff;
  padding: 17px 20px;
}
.categories-list-title {
  font-size: 20px;
  color: #ff4089;
  padding: 10px;
  line-height: 80%;
  margin: 2% 0;
}
.categories-list-sub-title {
  text-align: center;
  font-size: 15px;
  padding: 0 10px 16px;
}

@media only screen and (max-width: 767px) {
  .categories-list-top-container {
    margin-bottom: 20px;
    padding-top: 9px;
  }
  .bg-white-category {
    padding: 10px;
  }
}

@media only screen and (max-width: 1250px) {
  .categories-list-top {
    max-width: 100%;
  }
}

@media only screen and (min-width: 480px) {
  .categories-list-title {
    font-size: 28px;
  }
  .categories-list-sub-title {
    font-size: 19px;
  }
}

@media only screen and (min-width: 600px) {
  .categories-list-title {
    font-size: 32px;
  }
  .categories-list-sub-title {
    font-size: 23px;
  }
}

@media only screen and (min-width: 992px) {
  .categories-list-title {
    margin: 10px 0;
    font-size: 38px;
  }
  .categories-list-sub-title {
    font-size: 30px;
  }
}
</style>
