<template>
  <body>
    <div class="container product-details">
      <div class="row product-details__card">
        <div class="product-details__card-img-container">
          <img
            class="product-details__card-img-container-img"
            :src="info.img"
            alt=""
          />
        </div>
        <div class="col-md-4 product-details__info">
          <h1 class="my-4">
            {{ info.title }}
          </h1>
          <h2>{{ info.price }}€</h2>
          <div class="product-details__info-qty">
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              class="product-details__info-qty-icon"
            />
            <span
              class="product-details__info-qty-selector product-details__info-qty-selector--minus"
            >
              <font-awesome-icon
                icon="fa-solid fa-circle-minus"
                @click="decrease"
            /></span>

            <span class="product-details__info-qty-value">{{ quantity }}</span>
            <span
              class="product-details__info-qty-selector product-details__info-qty-selector--plus"
            >
              <font-awesome-icon
                icon="fa-solid fa-circle-plus"
                @click="increase"
            /></span>
          </div>
          <h2 class="my-3">Details :</h2>

          <p class="product-details__info-description">
            {{ info.description }}
          </p>

          <button
            type="button"
            :disabled="quantity === 0"
            class="btn btn-outline-primary btn-block product-details__info-cart-button"
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
  props: {
    info: {
      type: { Object },
      default: {
        img: String,
        title: String,
        price: Number,
        description: String,
      },
    },
  },
  data() {
    return {
      quantity: 0,
    };
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

.product-details {
  margin: auto;
  max-width: 1200px;
}
.product-details__card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.product-details__card-img-container {
  width: 100%;
  position: relative;
  text-align: center;
  padding: 15px;
}
.product-details__card-img-container-img {
  width: 60%;
  height: auto;
}
.product-details__info-qty {
  margin: 20px 0;
  display: flex;
  align-items: center;
}
.product-details__info-qty-selector,
.product-details__info-qty-icon {
  padding: 0 10px;
  font-size: 20px;
}
.product-details__info-qty-icon {
  padding-left: 0;
}
.product-details__info-qty-selector:hover {
  cursor: pointer;
}
.product-details__info-qty-selector--minus {
  color: #f44336;
}
.product-details__info-qty-selector--plus {
  color: var(--color-secondary);
}

.product-details__info-qty-value {
  width: 40px;
  text-align: center;
}
.product-details-description {
  font-size: 12px;
  font-weight: 600;
}
.product-details__info-cart-button {
  font-size: 14px;
  margin: 15px 0;
}
@media only screen and (min-width: 768px) {
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
  }
  .product-details {
    padding: 40px auto;
  }
  .product-details__card-img-container {
    flex: 0 0 50%;
    max-width: 50%;
    min-height: 1px;
    padding-right: 15px;
  }
  .product-details__card-img-container-img {
    height: 100%;
  }
  .product-details-description {
    font-size: 14px;
  }
  .product-details__info-cart-button {
    font-size: 16px;
  }
}

@media only screen and (max-width: 992px) and (min-width: 768px) {
  h1 {
    font-size: 22px;
  }
  h2 {
    font-size: 20px;
  }
  .product-details__info {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .product-details__card-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (min-width: 993px) {
  .product-details__card-img-container {
    padding: 0;
    text-align: left;
  }
  .product-details__info {
    flex: 0 0 60%;
    max-width: 40%;
  }
  .product-details__card-img-container-img {
    height: 100%;
  }
  .product-details__info-qty-selector,
  .product-details__info-qty-icon {
    font-size: 26px;
  }
}
</style>
