<template>
  <div class="assortment-selection">
    <category-separators>
      <span slot="main">Notre sélection</span>
      <span slot="secondary">d'assortiments</span>
    </category-separators>
    <div class="assortment-selection-content">
      <div class="carousel-container">
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
      cards: newProducts.items,
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
</style>
