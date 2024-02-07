<template>
  <div class="admin">
    <admin-product-form class="admin__form"></admin-product-form>
  </div>
</template>

<script>
import AdminProductForm from "@/components/Admin/AdminProductForm";

export default {
  components: {
    AdminProductForm,
  },
};
</script>

<style>
.admin {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
}
.admin__form {
  width: 50%;
}
</style>
