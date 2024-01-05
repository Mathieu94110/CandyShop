<template>
  <div>
    <category-separators>
      <span slot="main">Les délicieuses</span>
      <span slot="secondary">nouveautés</span>
    </category-separators>
    <div class="carousel-container">
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
  </div>
</template>

<script>
import CategorySeparators from "../../layout/CategorySeparators.vue";
import ShopProductItem from "../features/User/Shop/ShopProductItem.vue";
export default {
  data() {
    return {
      cards: [
        {
          id: "1",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/06/3a/08820d6918bee03a3a95e76e7d15.jpeg",
          title: "Boule de Noel",
          description: "Boule de Noel Transparente Gourmande (M)",
          price: 5.99,
        },
        {
          id: "2",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/f5/e3/e9cab507cc21be1c55ace7883dab.jpeg",
          title: "Boule de Noel",
          description: "Boule de Noel Transparente Gourmande (S)",
          price: 3.99,
        },
        {
          id: "3",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/25/da/bdfc01d54019a06ef8803c1c1e32.jpeg",
          title: "Gateau",
          description: "Gateau de Bonbons Merry Christmas",
          price: 1.99,
        },
        {
          id: "4",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/cf/bc/152cef96c86eff702a54855e5158.jpeg",
          title: "Gâteau de Bonbons",
          description: "Gâteau de Bonbons Sapin de de Noël",
          price: 19.99,
        },
        {
          id: "5",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/3f/4f/6e5e6d9be19da8beecb5f99e2cf5.jpeg",
          title: "Gâteau de Bonbons",
          description: "Gâteau de Bonbons Grand Sapin de de Noël",
          price: 24.9,
        },
        {
          id: "6",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/2d/bc/b73c22e5d17a339e4985b04e5c92.jpeg",
          title: "Fraise des bois",
          description: "Fraise des bois Acidulé",
          price: 1.1,
        },
        {
          id: "7",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/d8/11/d787690f3fc16eb11ba64f328a3d.jpeg",
          title: "Cordos",
          description: "Cordos Fruits des bois Acidulé Hitschler",
          price: 1.99,
        },
        {
          id: "8",
          img: "https://www.happycandy.fr/media/cache/sylius_shop_product_thumbnail/eb/22/cb8e6cf807399487d90d39448cd7.jpeg",
          title: "Cordos",
          description: "Cordos Pomme sauvage Acidulé Hitschler",
          price: 1.99,
        },
      ],
      innerStyles: {},
      step: "",
      transitioning: false,
    };
  },
  components: {
    ShopProductItem,
    CategorySeparators,
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

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
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
.carousel-container {
  width: 100%;
  height: 400px;
  padding: 0 10px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.carousel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: auto;
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
}
.inner {
  display: flex;
  white-space: nowrap;
  height: 100%;
  transition: transform 0.2s;
}

@media only screen and (min-width: 480px) {
  .bitbag-page-content .h1.centered {
    font-size: 22px;
  }
}

@media only screen and (min-width: 600px) {
  .carousel-container {
  padding: 0 20px;
}
.carousel-chevron {
  height: 30px;
}
  .bitbag-page-content .h1.centered {
    font-size: 28px;
    line-height: 100%;
  }
}
@media only screen and (min-width: 767px) {
  .bitbag-page-content .h1.centered {
    padding: 10px 15px;
    font-size: 30px;
  }
}
@media only screen and (min-width: 992px) {
  .carousel-chevron {
    height: 40px;
  }
  .bitbag-page-content .h1.centered {
    font: 49px "Jackie-Bold";
  }
}
</style>
