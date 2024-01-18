<template>
  <ul class="header-right-links">
    <li class="header-right-links__link">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="header-right-links__right-icons"
      />
      <span
        class="header-right-links__link-text"
        @click="$emit('switch-modal-display')"
        >Rechercher</span
      >
    </li>
    <li class="header-right-links__link">
      <font-awesome-icon
        icon="fa-solid fa-mobile-retro"
        class="header-right-links__right-icons"
      />
      <span class="header-right-links__link-text">0101010101</span>
    </li>
    <li class="header-right-links__link">
      <font-awesome-icon
        icon="fa-solid fa-user"
        class="header-right-links__right-icons"
      />
      <span class="header-right-links__link-text">Mon compte</span>
    </li>
    <li class="header-right-links__link" @click="goToShop()">
      <div class="header-right-links__link-cart">
        <span v-show="cartLength" class="header-right-links__link-cart-qty">{{
          cartLength
        }}</span>
        <font-awesome-icon
          icon="fa-solid fa-cart-shopping"
          class="header-right-links__right-icons position-relative"
        />
      </div>
      <span class="header-right-links__link-text"> Mon panier </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    goToShop() {
      if (this.$route.path !== "/shop") this.$router.push("/shop");
    },
  },
  computed: {
    ...mapGetters("cart", ["cartLength"]),
  },
};
</script>

<style scoped>
.header-right-links {
  display: flex;
  flex-direction: row;
}
.header-right-links::after {
  content: "";
  display: block;
  clear: both;
}
.header-right-links__link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}
.header-right-links__link-text {
  padding-top: 8px;
}
.header-right-links__link-cart {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-right-links__link:hover {
  color: var(--color-primary);
}
.header-right-links__link-cart-qty {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background: red;
  font-size: 12px;
  border-radius: 50%;
}

@media (max-width: 599px) {
  .header-right-links {
    max-width: 100%;
  }
  .header-right-links__link {
    width: 50%;
    color: #fff;
  }
  .header-right-links__link:nth-child(-n + 2) {
    display: none;
  }
  .header-right-links__link-text {
    display: none;
  }
}

@media only screen and (max-width: 999px) and (min-width: 600px) {
  .header-right-links__link {
    width: 25%;
    color: #fff;
  }
  .header-right-links__link-text {
    display: flex;
    margin: auto;
    font-size: 11px;
    font-weight: 600;
    padding: 0;
  }
  .candy-img {
    width: 80px;
    height: 80px;
  }
  .burger-menu {
    position: static;
    padding: 13px 0 0 6px;
    transform: none;
  }
  h1 {
    font-size: 14px;
  }
}
@media only screen and (min-width: 1000px) {
  .header-right-links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .header-right-links__link:first-child {
    display: none;
  }
  .header-right-links__link {
    width: calc(100% / 3);
    color: #fff;
  }
  .header-right-links__link-text {
    text-align: center;
    font-size: 16px;
  }
  .header-right-links__link-cart-qty {
    width: 22px;
    height: 22px;
    line-height: 22px;
  }
}
@media only screen and (min-width: 1320px) {
  .header-right-links__link {
    color: #fff;
  }
  .header-right-links__link:hover {
    color: var(--color-primary);
  }
}
</style>
