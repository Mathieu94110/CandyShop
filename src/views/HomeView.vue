<template>
  <div class="home">
    <WelcommeBanner />
    <NewProduct />
    <AssortmentSelection />
  </div>
</template>

<script>
import AssortmentSelection from "../components/Home/AssortmentSelection.vue";
import NewProduct from "../components/Home/NewProduct.vue";
import WelcommeBanner from "../components/Home/WelcomeBanner.vue";
export default {
  components: {
    WelcommeBanner,
    NewProduct,
    AssortmentSelection,
  },
};
</script>

<style>
.home {
  width: 100%;
  margin: 80px 0;
}
</style>
