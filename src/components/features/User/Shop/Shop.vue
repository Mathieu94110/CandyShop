<template>
  <shop-products-list :products='products' class="p-3"></shop-products-list>
</template>

<script>
import { eventBus } from  '../../../../main';
  import ShopProductsList from './ShopProductsList.vue';

export default {
  components: {
    ShopProductsList
  },
  data(){
    return {
        products:[]
    }
  },
  created(){
    this.products = eventBus.products;
    eventBus.$on("update:products",(products)=>{
        this.products = products
    })
  }
}

</script>

<style>

</style>