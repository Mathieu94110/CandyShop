<template>
  <ul class="pagination">
    <!-- Visible Buttons Previous-->
    <li class="pagination__item">
      <button
        v-show="!isInFirstPage"
        type="button"
        @click="onClickPreviousPage"
      >
        <font-awesome-icon icon="fa-solid fa-left-long" />
      </button>
    </li>
    <!-- max Three visible buttons with page number-->
    <li v-for="page in pages" :key="page.name" class="pagination__item">
      <button
        type="button"
        :class="{ active: isPageActive(page.name) }"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </li>
    <!-- Visible Buttons Next-->
    <li class="pagination__item">
      <button v-show="!isInLastPage" type="button" @click="onClickNextPage">
        <font-awesome-icon icon="fa-solid fa-right-long" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }
      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons > 0
          ? this.totalPages - this.maxVisibleButtons + 1 // +1 to display current last active page
          : 1;
      }

      // When in between
      return this.currentPage - 1;
    },
    // Method below refresh 3 displaying button number content
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>
<style>
.pagination {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 10px;
}

.pagination__item {
  display: inline-block;
}

.pagination__item button {
  width: 30px;
  height: 30px;
  margin: 0 4px;
  color: var(--color-dark-light);
  border-color: var(--color-dark-light);
  background: #fff;
}

button.active {
  background-color: var(--color-secondary);
  color: #fff;
}

@media only screen and (min-width: 680px) {
  .pagination__item button {
    width: 40px;
    height: 40px;
  }
}
</style>
