<template>
  <div>
    <category-separators>
      <span slot="main">Les délicieuses</span>
      <span slot="secondary">nouveautés</span>
    </category-separators>
    <div class="new-product-content">
      <div class="carousel-container">
        <carousel-layout :cards="cards" @prev="prev" @next="next" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselLayout from "../../layout/CarouselLayout.vue";
import CategorySeparators from "../../layout/CategorySeparators.vue";
import newProducts from "../../locales/newProducts.json";
export default {
  data() {
    return {
      cards: newProducts.items,
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  components: {
    CategorySeparators,
    CarouselLayout,
  },

  methods: {
    // i removed last element who is the current param on prev() and i add it at the begin of the cards table
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

<style scoped>
.new-product-content {
  height: 400px;
  width: 100%;
  display: flex;
  position: relative;
}
</style>
