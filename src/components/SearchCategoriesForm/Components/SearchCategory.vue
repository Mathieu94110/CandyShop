<template>
  <div class="search-category my-1 mx-2">
    <div
      class="search-category__selected-options"
      @click="setDropdownsStatus(position)"
    >
      <span v-if="selectedOptions.length === 0">{{
        filters.value.toUpperCase()
      }}</span>
      <span v-else-if="selectedOptions.length === 1">{{
        selectedOptions[0].value
      }}</span>
      <span v-else>{{ selectedOptions.length }} catégories</span>
    </div>
    <div class="search-category" v-show="isLocalDropdownOpen">
      <div
        class="search-category__option"
        v-for="option in filters.data"
        :key="option.value"
      >
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
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      filters: {},
      selectedOptions: [],
      isLocalDropdownOpen: false,
    };
  },
  props: {
    productFilters: {
      type: Object,
    },
    position: {
      type: Number,
    },
  },
  methods: {
    ...mapMutations("dropDownsFilters", ["setDropdownsStatus"]),
    updateSelectedOptions() {
      this.selectedOptions = this.filters.data.filter(
        (option) => option.checked
      );
      this.$emit("updateSelection", {
        filter: this.filters.label,
        options: this.selectedOptions,
      });
    },
  },
  computed: {
    ...mapState("dropDownsFilters", {
      isDropdownOpen: "dropdownsStatus",
    }),
  },
  watch: {
    productFilters: {
      handler(newValue) {
        this.filters = { ...newValue };
      },
      immediate: true,
    },
    isDropdownOpen: {
      handler: function (newValue) {
        this.isLocalDropdownOpen = newValue[this.position];
      },
    },
  },
};
</script>

<style scoped>
.search-category {
  position: relative;
  display: inline-block;
  width: 160px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-category .search-category__selected-options {
  display: block;
  padding: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
}

.search-category .search-category {
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

.search-category__option {
  display: block;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s ease;
  font-size: 12px;
}

.search-category__option:last-child {
  border-bottom: none;
}

label {
  display: block;
}
label span {
  color: var(--color-dark);
}

.search-category__option input[type="checkbox"] {
  margin-right: 10px;
}

.search-category__option input[type="checkbox"]:checked + span {
  font-weight: bold;
}

.search-category__option input[type="checkbox"]:focus + span {
  outline: 2px solid #7fb3d5;
}

.search-category__option:hover {
  background-color: #f2f2f2;
}

.search-category__option span {
  display: inline-block;
  width: calc(100% - 30px);
}

@media screen and (min-width: 600px) {
  .search-category .search-category__selected-options {
    padding: 10px;
    font-size: 14px;
  }
  .search-category__option {
    font-size: 13px;
  }
}
</style>
