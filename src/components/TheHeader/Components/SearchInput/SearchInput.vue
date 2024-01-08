<template>
  <div class="search-input-container">
    <form>
      <input
        type="text"
        :value="inputData"
        @keyup="$emit('input', $event.target.value)"
        placeholder="Rechercher"
        class="search-input"
      />
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="search-icon"
      />
    </form>
    <!-- v-if is used instead of v-show on below in order to avoid memory leaks with child ref -->
    <SearchInputList
      :filteredList="filteredList"
      :inputData="inputData"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import SearchInputList from "./Components/SearchInputList.vue";
export default {
  components: {
    SearchInputList,
  },
  props: {
    inputData: String,
    filteredList: Array,
  },
};
</script>

<style scoped>
.search-input-container {
  position: relative;
  max-width: 300px;
}
.search-input {
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
.search-input::placeholder {
  color: #fff;
}
.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  color: #fff;
}
</style>
