<template>
  <body>
    <div class="container product-details">
      <div class="row">
        <div class="product-details-img-container">
          <img class="product-details-img" :src="info.img" alt="" />
        </div>
        <div class="col-md-4 product-details-info">
          <h1 class="my-4">
            {{ info.title }}
          </h1>
          <h2>{{ info.price }}€</h2>
          <div class="product-details-qty">
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              class="product-details-cart-icon"
            />
            <span class="product-details-qty-selector minus">
              <font-awesome-icon
                @click="decrease"
                icon="fa-solid fa-circle-minus"
            /></span>

            <span class="product-details-qty-value">{{ quantity }}</span>
            <span class="product-details-qty-selector plus">
              <font-awesome-icon
                @click="increase"
                icon="fa-solid fa-circle-plus"
            /></span>
          </div>
          <h2 class="my-3">Details :</h2>

          <p class="product-details-description">{{ info.description }}</p>

          <button
            type="button"
            :disabled="quantity === 0"
            class="btn btn-outline-primary btn-block cart-button"
            @click="addToCart"
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
      quantity: 0,
    };
  },
  props: {
    info: Object,
  },
  methods: {
    increase() {
      this.quantity += 1;
    },
    decrease() {
      this.quantity - 1 >= 0 ? (this.quantity -= 1) : (this.quantity = 0);
    },
    addToCart() {
      this.$emit("add-to-cart", { ...this.info, quantity: this.quantity });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 16px;
  color: var(--color-primary);
}
h2 {
  font-size: 14px;
}
button {
  font-size: 14px;
}
.product-details {
  margin: auto;
  max-width: 1200px;
}
.product-details-img-container {
  width: 100%;
  position: relative;
  text-align: center;
  padding: 15px;
}
.product-details-img {
  width: 60%;
  height: auto;
}
.product-details-qty {
  margin: 20px 0;
  display: flex;
  align-items: center;
}
.product-details-qty-selector,
.product-details-cart-icon {
  padding: 0 10px;
  font-size: 20px;
}
.product-details-cart-icon {
  padding-left: 0;
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
  font-size: 12px;
  font-weight: 600;
}
.cart-button {
  margin: 15px 0;
}
@media only screen and (min-width: 768px) {
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
  }
  button {
    font-size: 16px;
  }
  .product-details {
    padding: 40px auto;
  }
  .product-details-img-container {
    flex: 0 0 50%;
    max-width: 50%;
    min-height: 1px;
    padding-right: 15px;
  }
  .product-details-img {
    height: 100%;
  }
  .product-details-description {
    font-size: 14px;
  }
}

@media only screen and (max-width: 992px) and (min-width: 768px) {
  h1 {
    font-size: 22px;
  }
  h2 {
    font-size: 20px;
  }
  .product-details-info {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .product-details-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (min-width: 993px) {
  .product-details-img-container {
    padding: 0;
    text-align: left;
  }
  .product-details-info {
    flex: 0 0 60%;
    max-width: 40%;
  }
  .product-details-img {
    height: 100%;
  }
  .product-details-qty-selector,
  .product-details-cart-icon {
    font-size: 26px;
  }
}
</style>
