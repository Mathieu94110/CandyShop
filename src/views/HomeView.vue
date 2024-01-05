<template>
  <div class="home">
    <div class="top">
      <WelcommeBanner />
      <NewProduct />
      <AssortmentSelection />
    </div>
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
}
.top {
  margin-top: 80px;
  width: 100%;
}
</style>
