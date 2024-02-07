<template>
  <div class="search-input">
    <form>
      <input
        type="text"
        :value="inputData"
        placeholder="Rechercher"
        class="search-input__input"
        @keyup="$emit('input', $event.target.value)"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="search-input__icon"
      />
    </form>
    <!-- v-if is used instead of v-show on below in order to avoid memory leaks with child ref -->
    <SearchInputList
      :filtered-list="filteredList"
      :input-data="inputData"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import SearchInputList from "@/components/TheHeader/Components/SearchInput/Components/SearchInputList.vue";
export default {
  components: {
    SearchInputList,
  },
  props: {
    inputData: { type: String, default: "" },
    filteredList: {
      type: Array,
      default: () => [{ id: 0, title: "", img: "" }],
    },
  },
};
</script>

<style scoped>
.search-input {
  position: relative;
  max-width: 300px;
}
.search-input__input {
  width: 100%;
  border: none;
  padding: 5px 35px 5px 10px;
  color: #fff;
  font: 14px;
  height: 42px;
  background: #444444;
  border-right: 10px solid #444444;
  border-radius: 0;
  outline: none;
}
.search-input__input::placeholder {
  color: #fff;
}
.search-input__icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  color: #fff;
}
</style>
