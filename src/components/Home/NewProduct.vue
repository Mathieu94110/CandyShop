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
