<template>
  <h2 class="categories-separator-title">
    <strong><slot name="main" /><slot name="secondary" /></strong>
  </h2>
</template>

<script>
export default {};
</script>

<style scoped>
.categories-separator-title {
  margin: 20px 0;
  padding: 0;
  position: relative;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
  color: #212529;
}
.categories-separator-title > strong {
  color: var(--color-primary);
  display: inline-block;
  font: 20px "Jackie-Bold";
  padding: 15px 2%;
  position: relative;
  background: #ffffff;
  line-height: 84%;
}
.categories-separator-title > strong > span:nth-child(2) {
  display: block;
  font: 18px "Gotham-Bold";
  color: #161616;
  text-transform: uppercase;
}

.categories-separator-title::after {
  content: "";
  width: 100%;
  height: 1px;
  border-top: 1px dotted rgb(0, 0, 0);
  height: 1px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
}
@media only screen and (min-width: 480px) {
  .categories-separator-title > strong {
    font-size: 22px;
  }
  .categories-separator-title > strong > span:nth-child(2) {
    font-size: 20px;
  }
}

@media only screen and (min-width: 600px) {
  .categories-separator-title > strong {
    font-size: 28px;
    line-height: 100%;
  }
  .categories-separator-title > strong > span:nth-child(2) {
    font-size: 26px;
  }
}
@media only screen and (min-width: 767px) {
  .categories-separator-title > strong {
    padding: 10px 15px;
    font-size: 30px;
  }
  .categories-separator-title > strong > span:nth-child(2) {
    font-size: 28px;
  }
}
@media only screen and (min-width: 992px) {
  .categories-separator-title > strong {
    font: 40px "Jackie-Bold";
  }
  .categories-separator-title > strong > span:nth-child(2) {
    font-size: 36px;
  }
}
</style>
