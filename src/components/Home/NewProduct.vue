<template>
  <div>
    <category-separators>
      <span slot="main">Les délicieuses</span>
      <span slot="secondary">nouveautés</span>
    </category-separators>
    <div class="new-product-content">
      <div class="new-product-carousel-container">
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
      cards: [...newProducts.items],
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
  height: 350px;
  width: 100%;
  display: flex;
  position: relative;
}
.new-product-carousel-container {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (min-width: 600px) {
  .new-product-carousel-container {
    padding: 0 20px;
  }
}
</style>
