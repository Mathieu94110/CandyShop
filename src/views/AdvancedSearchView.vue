<template>
  <div>
    <div class="advanced-search-top-container">
      <div class="advanced-search-top">
        <div class="bg-white-category">
          <div class="text-center">
            <h1 class="advanced-search-title">
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
      <h2 class="advanced-search-sub-title">
        Nous recherchons les meilleurs résultats selon vos critères
      </h2>
    </div>
    <SearchCategoriesForm />
    <User />
  </div>
</template>

<script>
import User from "../components/features/User/User.vue";
import SearchCategoriesForm from "../components/SearchCategoriesForm/SearchCategoriesForm.vue";
export default {
  data() {
    return {
      isSearchActive: false,
    };
  },
  components: {
    User,
    SearchCategoriesForm,
  },
};
</script>

<style scoped>
.advanced-search-top-container {
  padding: 20px 0 40px 0;
  background: url(https://png.pngtree.com/thumb_back/fh260/background/20201128/pngtree-colorful-polka-dot-background-image_500722.jpg)
    repeat top center;
  margin-bottom: 40px;
}
.advanced-search-top {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.bg-white-category {
  background: #fff;
  padding: 17px 20px;
  margin-top: 10px;
}
.advanced-search-title {
  font-size: 20px;
  color: #ff4089;
  padding: 0 0 20px 0;
  line-height: 80%;
  margin: 2% 0;
}
.advanced-search-sub-title {
  text-align: center;
  font-size: 15px;
  padding: 0 10px 16px;
}

@media only screen and (max-width: 767px) {
  .advanced-search-top-container {
    margin-bottom: 20px;
    padding-top: 9px;
  }
  .bg-white-category {
    padding: 10px;
  }
}

@media only screen and (max-width: 1250px) {
  .advanced-search-top {
    max-width: 100%;
  }
}

@media only screen and (min-width: 480px) {
  .advanced-search-title {
    font-size: 28px;
  }
  .advanced-search-sub-title {
    font-size: 19px;
  }
}

@media only screen and (min-width: 600px) {
  .advanced-search-title {
    font-size: 32px;
  }
  .advanced-search-sub-title {
    font-size: 23px;
  }
}

@media only screen and (min-width: 992px) {
  .advanced-search-title {
    font-size: 38px;
  }
  .advanced-search-sub-title {
    font-size: 30px;
  }
}
</style>
