<template>
  <div class="d-flex flex-row justify-content-between p-2">
    <span
      ><strong>{{ item.quantity }}</strong></span
    >
    <span style="width: 130px">{{ item.title }}</span>
    <span
      ><strong>{{ item.price | price }}</strong></span
    >
    <button class="close" @click="deleteOne(item.id)">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return { title: "", price: null };
      },
    },
  },
  methods: {
    ...mapMutations("cart", ["deleteOne"]),
  },
};
</script>

<style></style>
