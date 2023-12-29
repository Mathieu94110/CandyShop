import Vue from "vue";
import App from "./App.vue";
import * as Filters from "./utils/filters";

Vue.config.productionTip = false;

Object.keys(Filters).forEach((f) => {
  Vue.filter(f, Filters[f]);
});

export const eventBus = new Vue({
  data: {
    products: [
      {
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_4936768b.jpg?v=1531989933",
        title: "LUTTI bouteille Bubblizz ",
        description: "Bonbons Lutti en vrac / sachet de 2 kg",
        price: "13.00",
      },
      {
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_5434123b.jpg?v=1524126219",
        title: "HARIBO Dragibus",
        description: "HARIBO Dragibus SOFT en sac de 2 kg",
        price: "19.00",
      },
      {
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_11421816b.jpg?v=1697119568",
        title: "Fini TWIST marshmallow",
        description: "Fini TWIST marshmallow torsadé en sachet de 125 unités",
        price: "8.00",
      },
      {
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_11760003b.jpg?v=1692958672",
        title: "DULCEPLUS",
        description: "DULCEPLUS Jumbo Acides MULTICOLORES x 30",
        price: "11.00",
      },
      {
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_1450804b.jpg?v=1530272073",
        title: "Pralines",
        description: "Pralines aux Cacahuètes - 5 Kg",
        price: "27.00",
      },
      {
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_10761207b.jpg?v=1561538654",
        title: "Bonbons tendres fruités",
        description:
          "Bonbons tendres aux goûts fruités assortis en sachet de 1 kg",
        price: "5.00",
      },
    ],
    cart: [],
    page: "Admin",
  },
  created() {},
  methods: {
    addProductToCart(product) {
      if (!this.cart.map((i) => i.id).includes(product.id)) {
        this.cart = [...this.cart, product];
        this.$emit("update:cart", this.cart.slice());
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter((i) => i.id !== item.id);
      this.$emit("update:cart", this.cart.slice());
    },
    changePage(page) {
      this.page = page;
      this.$emit("update:page", this.page);
    },
    addProduct(product) {
      (this.products = [
        ...this.products,
        { ...product, id: this.products.length + 1 + "" },
      ]),
        this.$emit("update:products", this.products);
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
