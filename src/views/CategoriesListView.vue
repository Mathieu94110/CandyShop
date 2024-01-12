<template>
  <div class="categories-list">
    <div v-if="categoryList">
      <Shop :products="categoryList" />
    </div>
    <div v-else class="text-center">
      <h2 class="text-danger">
        Problème rencontré lors de la récupération des produits
      </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "../components/Shop/Shop.vue";

export default {
  components: {
    Shop,
  },
  created() {
    const category = this.$route.params.category;
    this.getCategoryList(category);
  },
  methods: {
    getCategoryList(payload) {
      this.$store.dispatch("product/getCategoryList", payload);
    },
  },
  computed: {
    ...mapGetters("product", ["categoryList"]),
  },
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
