<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px" :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        img: "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_4936768b.jpg?v=1531989933",
        title: "LUTTI bouteille Bubblizz ",
        description: "Bonbons Lutti en vrac / sachet de 2 kg",
        price: "13.00€",
      },
    };
  },
};
</script>

<style>
.product-container {
  height: 400px;
}

p {
  font-size: 12px;
}
</style>
