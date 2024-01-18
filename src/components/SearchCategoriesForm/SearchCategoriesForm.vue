<template>
  <div class="search-categories-form">
    <div class="search-categories-form__filter">
      <div class="search-categories-form__filter-title">Filtrer</div>
      <div class="search-categories-form__filter-inputs-container">
        <div class="search-categories-form__filter-inputs-container-inputs">
          <div>
            <SearchCategory
              v-for="(value, _, index) in productFilters"
              :key="value.label"
              :position="index"
              :product-filters="value"
              v-on="$listeners"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsFiltersList from "../../locales/productFilters.json";
import SearchCategory from "./Components/SearchCategory.vue";
export default {
  components: {
    SearchCategory,
  },
  data() {
    return {
      productFilters: productsFiltersList,
      selectedOptions: [],
    };
  },
};
</script>

<style scoped>
.search-categories-form {
  background: #ff4089;
  padding: 5px 8px;
  color: #333333;
}
.search-categories-form__filter {
  display: table;
  width: 100%;
  color: #333333;
  font-size: 13px;
}
.search-categories-form__filter-title {
  margin-bottom: 10px;
  width: 80px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
.search-categories-form__filter-inputs-container {
  margin: 0 20px;
}

@media only screen and (min-width: 601px) {
  .search-categories-form {
    padding: 15px 20px;
  }
  .search-categories-form__filter-inputs-container-inputs {
    display: block;
    height: auto;
  }
}
@media only screen and (max-width: 1024px) {
  .search-categories-form__filter-inputs-container-inputs {
    margin: 0 0 0 -10px;
  }
}

@media only screen and (max-width: 992px) {
  .search-categories-form__filter > div {
    display: block;
  }
}
.search-categories-form__filter > div {
  display: table-cell;
  vertical-align: middle;
}
@media only screen and (max-width: 992px) {
  .search-categories-form__filter-title {
    padding-top: 0;
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
}
</style>
