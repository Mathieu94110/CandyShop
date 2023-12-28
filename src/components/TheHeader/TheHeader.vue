<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">
      <img src="../../assets/candy-shop.png" width="50" height="50" />
      CandyShop
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link">Boutique</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Admin</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar-nav > :hover {
  cursor: pointer;
}
</style>
