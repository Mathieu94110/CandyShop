<template>
  <div class="home">
    <div class="top">
      <WelcommeBanner />
      <NewProduct />
    </div>
  </div>
</template>

<script>
import NewProduct from "../components/Home/NewProduct.vue";
import WelcommeBanner from "../components/Home/WelcomeBanner.vue";

export default {
  components: {
    WelcommeBanner,
    NewProduct,
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
