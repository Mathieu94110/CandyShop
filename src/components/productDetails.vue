<template>
  <body>
    <div class="container product-details">
      <div class="row">
        <div class="product-details-img-container">
          <img class="product-details-img" :src="info.img" alt="" />
        </div>
        <div class="col-md-4">
          <h1 class="my-4">
            <span class="product-details-title">{{ info.title }}</span>
          </h1>
          <h2>{{ info.price }}€</h2>
          <h2 class="product-details-qty">
            <svg width="36" height="36" viewBox="0 0 24 24">
              <path
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4h2L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
              />
            </svg>
            <span class="product-details-qty-selector minus">
              <font-awesome-icon
                @click="removeFromCart"
                icon="fa-solid fa-circle-minus"
                class="social-networks-icon"
            /></span>

            <span class="product-details-qty-value">{{ cart }}</span>
            <span class="product-details-qty-selector plus">
              <font-awesome-icon
                @click="addToCart"
                icon="fa-solid fa-circle-plus"
                class="social-networks-icon"
            /></span>
          </h2>
          <h2 class="my-3">Details</h2>

          <p class="product-details-description">{{ info.description }}</p>

          <button
            type="button"
            class="btn btn-outline-primary btn-lg btn-block btn-custom-color cart-button"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      cart: 0,
      activeClass: 0,
    };
  },
  props: {
    info: Object,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    removeFromCart: function () {
      this.cart - 1 >= 0 ? (this.cart -= 1) : (this.cart = 0);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 28px;
}
h2 {
  font-size: 26px;
}

.product-details {
  margin: 40px auto;
  background-color: #eeeeee;
}
.product-details-img-container {
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
}
.product-details-img {
  height: 100%;
}
.product-details-title {
  color: var(--color-primary);
}
.product-details-qty {
  margin: 20px 0;
  display: flex;
  align-items: center;
}
.product-details-qty-selector {
  padding: 0 10px;
}
.product-details-qty-selector:hover {
  cursor: pointer;
}
.minus {
  color: #f44336;
}
.plus {
  color: var(--color-secondary);
}
.product-details-qty-value {
  width: 40px;
  text-align: center;
}
.product-details-description {
  font-size: 16px;
}
.btn-custom-color {
  border: 2px solid var(--color-tertiary);
  color: var(--color-tertiary);
}
.btn-custom-color:hover {
  border: 2px solid var(--color-tertiary);
  background-color: var(--color-tertiary);
  color: #ffffff;
}
.cart-button {
  margin: 20px 0;
}
</style>
