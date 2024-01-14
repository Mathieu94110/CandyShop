<template>
  <div class="dropdown mx-2">
    <div
      class="selected-options"
      @click="isDropdownOpen = !isDropdownOpen"
      ref="dropdownList"
    >
      <span v-if="selectedOptions.length === 0">{{
        filters.value.toUpperCase()
      }}</span>
      <span v-else-if="selectedOptions.length === 1">{{
        selectedOptions[0].value
      }}</span>
      <span v-else>{{ selectedOptions.length }} catégories</span>
    </div>
    <div class="dropdown" v-show="isDropdownOpen">
      <div class="option" v-for="option in filters.data" :key="option.value">
        <label
          v-if="
            typeof option.label === 'string' && option.label.endsWith('price')
          "
        >
          <span>{{ option.value }}:</span>
          <input
            type="number"
            style="max-width: 100%"
            @keyup="
              $emit('priceRange', {
                target: option.label,
                value: Number($event.target.value),
              })
            "
          />
        </label>
        <label v-else>
          <input
            type="checkbox"
            :value="option.label"
            v-model="option.checked"
            @change="updateSelectedOptions"
          />
          <span>{{ option.value }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {},
      selectedOptions: [],
      isDropdownOpen: false,
    };
  },
  props: {
    productFilters: {
      type: Object,
    },
  },
  methods: {
    updateSelectedOptions() {
      this.selectedOptions = this.filters.data.filter(
        (option) => option.checked
      );
      this.$emit("updateSelection", {
        filter: this.filters.label,
        options: this.selectedOptions,
      });
    },
    handleClickOutside(event) {
      // on progress , this part will be on parent for the moment its not the expect behaviour
      const dropDownElement = this.$refs.dropdownList;
      if (!dropDownElement.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
  watch: {
    productFilters: {
      handler(newValue) {
        this.filters = { ...newValue };
      },
      immediate: true,
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    // Remove the click event listener when the component is about to be destroyed
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  width: 160px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown .selected-options {
  display: block;
  padding: 10px;
  cursor: pointer;
  color: #fff;
}

.dropdown .dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: auto;
  max-height: 200px;
  width: 100%;
}

.dropdown .dropdown .option {
  display: block;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s ease;
}

.dropdown .dropdown .option:last-child {
  border-bottom: none;
}

label {
  display: block;
}
label span {
  color: var(--color-dark);
}

.dropdown .dropdown .option input[type="checkbox"] {
  margin-right: 10px;
}

.dropdown .dropdown .option input[type="checkbox"]:checked + span {
  font-weight: bold;
}

.dropdown .dropdown .option input[type="checkbox"]:focus + span {
  outline: 2px solid #7fb3d5;
}

.dropdown .dropdown .option:hover {
  background-color: #f2f2f2;
}

.dropdown .dropdown .option span {
  display: inline-block;
  width: calc(100% - 30px);
}
</style>