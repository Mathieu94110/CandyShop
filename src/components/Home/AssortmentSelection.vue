<template>
  <div class="assortment-selection">
    <category-separators>
      <span slot="main">Notre sélection</span>
      <span slot="secondary">d'assortiments</span>
    </category-separators>
    <div class="assortment-selection__container">
      <div class="assortment-selection__container-carousel">
        assortment-selection__container
        <carousel-layout :cards="cards" @prev="prev" @next="next" />
      </div>
      <div class="assortment-selection__container-left"></div>
      <div class="assortment-selection__container-right"></div>
    </div>
  </div>
</template>

<script>
import CarouselLayout from "@/layout/CarouselLayout.vue";
import CategorySeparators from "@/layout/CategorySeparators.vue";
import newProducts from "@/locales/newProducts.json";
export default {
  components: {
    CategorySeparators,
    CarouselLayout,
  },
  data() {
    return {
      cards: [...newProducts.items],
    };
  },
  methods: {
    prev(value) {
      this.cards.pop();
      this.cards.unshift(value);
    },
    // same logic reversed
    next(value) {
      this.cards.shift();
      this.cards.push(value);
    },
  },
};
</script>

<style>
.assortment-selection {
  width: 100%;
}
.assortment-selection__container {
  height: 600px;
  width: 100%;
  display: flex;
  position: relative;
}
.assortment-selection__container-carousel {
  width: 100%;
  height: 350px;
  padding: 0 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.assortment-selection__container-left {
  flex-basis: 700px;
  background-image: url("../../assets/sweets-assortment.jpeg");
  height: 100%;
}
.assortment-selection__container-right {
  background-color: #ffe469;
  flex-grow: 1;
  height: 100%;
}

@media only screen and (min-width: 600px) {
  .assortment-selection__container-carousel {
    padding: 0 20px;
  }
}
</style>
