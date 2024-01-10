<template>
  <div class="d-flex w-100 position-absolute top-0 left-0 h-100">
    <div class="carousel-chevron-container" @click="prev">
      <font-awesome-icon
        icon="fa-solid fa-chevron-left"
        class="carousel-chevron"
      />
    </div>
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <ShopProductItem
          v-for="product in cards"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <div class="carousel-chevron-container" @click="next">
      <font-awesome-icon
        icon="fa-solid fa-chevron-right"
        class="carousel-chevron"
      />
    </div>
  </div>
</template>

<script>
import ShopProductItem from "../components/features/User/Shop/ShopProductItem.vue";
export default {
  props: {
    cards: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  components: {
    ShopProductItem,
  },
  mounted() {
    this.setStep();
    this.resetTranslate();
  },

  methods: {
    // the step below allows to calculate the location where the element must be moved
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();
      // on below i saving the first card in current cards props and i emit with this value to the parent component
      this.afterTransition(() => {
        const firstCard = this.cards[0];
        this.$emit("next", firstCard);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        // like on next method but for the current last cards props object
        const lastCard = this.cards[this.cards.length - 1];
        this.$emit("prev", lastCard);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },

    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },

    resetTranslate() {
      this.innerStyles = {
        transition: "none",
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
}
.carousel-chevron-container {
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-chevron-container:hover {
  cursor: pointer;
}
.carousel-chevron {
  height: 24px;
  color: var(--color-tertiary);
}
.inner {
  display: flex;
  white-space: nowrap;
  height: 100%;
  transition: transform 0.2s;
}

@media only screen and (min-width: 600px) {
  .carousel-chevron {
    height: 30px;
  }
}

@media only screen and (min-width: 992px) {
  .carousel-chevron {
    height: 40px;
  }
}
</style>
