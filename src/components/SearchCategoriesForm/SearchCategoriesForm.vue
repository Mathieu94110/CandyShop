<template>
  <div class="filter-category">
    <div class="category-filter">
      <div class="category-filter-title">Filtrer</div>
      <div class="category-filter-inputs-container">
        <div class="category-filter-inputs">
          <form submit.prevent>
            <select v-model="selected.category" class="select-input">
              <option disabled value="">Catégories</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>

            <select v-model="selected.price" class="select-input">
              <option disabled value="">Prix</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>

            <select v-model="selected.batch" class="select-input">
              <option disabled value="">Lot de:</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>

            <select v-model="selected.bag" class="select-input">
              <option disabled value="">Sachet de:</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: { category: "", price: "", batch: "", bag: "" },
    };
  },
};
</script>

<style scoped>
.category-filter {
  display: table;
  width: 100%;
  color: #333333;
  font-size: 13px;
}
.category-filter-inputs-container {
  margin: 0 20px;
}
.filter-category {
  background: #ff4089;
  padding: 15px 20px;
  color: #333333;
}

.select-input {
  margin: 10px 20px;
  height: 38px;
  padding: 10px 20px 12px 15px;
  max-width: 220px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  font: 13px "Gotham-Bold";
  text-transform: uppercase;
}

.category-filter-title {
  margin-bottom: 10px;
  width: 80px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
@media only screen and (min-width: 601px) {
  .category-filter-inputs {
    display: block;
    height: auto;
  }
}

@media only screen and (max-width: 1024px) {
  .category-filter-inputs {
    margin: 0 0 0 -10px;
  }
}

@media only screen and (max-width: 992px) {
  .category-filter > div {
    display: block;
  }
}
.category-filter > div {
  display: table-cell;
  vertical-align: middle;
}
@media only screen and (max-width: 992px) {
  .category-filter-title {
    padding-top: 0;
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
}
</style>
