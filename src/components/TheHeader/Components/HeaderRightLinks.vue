<template>
  <ul class="clear-float">
    <li class="navbar-li">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="right-icons"
      />
      <span class="navbar-li-text pt-2">Rechercher</span>
    </li>
    <li class="navbar-li">
      <font-awesome-icon icon="fa-solid fa-mobile-retro" class="right-icons" />
      <span class="navbar-li-text pt-2">0101010101</span>
    </li>
    <li class="navbar-li">
      <font-awesome-icon icon="fa-solid fa-user" class="right-icons" />
      <span class="navbar-li-text pt-2">Mon compte</span>
    </li>
    <li class="navbar-li">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="right-icons" />
      <span class="navbar-li-text pt-2"
        ><router-link class="nav-link" to="/shop"
          >Mon panier
        </router-link></span
      >
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.clear-float {
  display: flex;
  flex-direction: row;
}
.clear-float::after {
  content: "";
  display: block;
  clear: both;
}
.navbar-li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 599px) {
  .clear-float {
    max-width: 100%;
  }
  .navbar-li {
    width: 50%;
    color: #fff;
  }
  .navbar-li:nth-child(-n + 2) {
    display: none;
  }
  .navbar-li-text {
    display: none;
  }
}

@media only screen and (max-width: 993px) and (min-width: 600px) {
  .navbar-li {
    width: 25%;
    color: #fff;
  }
  .navbar-li-text {
    display: flex;
    text-align: center;
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
  .clear-float {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .navbar-li:first-child {
    display: none;
  }
  .navbar-li {
    width: calc(100% / 3);
    color: #fff;
    cursor: pointer;
  }
  .navbar-li:hover {
    color: var(--color-primary);
  }
  .navbar-li-text {
    text-align: center;
    font-size: 16px;
  }
}
@media only screen and (min-width: 1320px) {
  .navbar-li {
    color: #fff;
    cursor: pointer;
  }
  .navbar-li:hover {
    color: var(--color-primary);
  }
}
</style>
