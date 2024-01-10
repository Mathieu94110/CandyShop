<template>
  <div class="assortment-selection">
    <category-separators>
      <span slot="main">Notre sélection</span>
      <span slot="secondary">d'assortiments</span>
    </category-separators>
    <div class="assortment-selection-content">
      <div class="assortment-carousel-container">
        <carousel-layout :cards="cards" @prev="prev" @next="next" />
      </div>
      <div class="assortment-selection-left-side item"></div>
      <div class="assortment-selection-right-side item"></div>
    </div>
  </div>
</template>

<script>
import CarouselLayout from "../../layout/CarouselLayout.vue";
import CategorySeparators from "../../layout/CategorySeparators.vue";
import newProducts from "../../locales/newProducts.json";
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
.assortment-selection-content {
  height: 600px;
  width: 100%;
  display: flex;
  position: relative;
}
.assortment-carousel-container {
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
.item {
  height: 100%;
}
.assortment-selection-left-side {
  flex-basis: 700px;
  background-image: url("../../assets/sweets-assortment.jpeg");
}
.assortment-selection-right-side {
  background-color: #ffe469;
  flex-grow: 1;
}

@media only screen and (min-width: 600px) {
  .assortment-carousel-container {
    padding: 0 20px;
  }
}
</style>
