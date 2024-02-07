<template>
  <transition name="modal-fade">
    <div
      class="search-modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header id="modalTitle" class="search-modal__header">
        <p>Rechercher des articles</p>
        <button
          type="button"
          class="search-modal__header-btn-close"
          aria-label="Close modal"
          @click="$emit('switch-modal-display')"
        >
          x
        </button>
      </header>

      <section id="modalDescription" class="search-modal__body">
        <input v-model="searchInput" type="text" />
        <ul
          v-show="searchInput && filteredList.length"
          class="search-modal__body-list"
        >
          <li
            v-for="product in filteredList"
            :key="product.id"
            class="search-modal__body-list-item"
            @click="navigateToProduct(product.id)"
          >
            <span>{{ product.title }}</span
            ><span
              ><img :src="product.img" class="search-modal__body-list-item-img"
            /></span>
          </li>
        </ul>
        <p
          v-if="searchInput && !filteredList.length"
          class="search-modal__no-result"
        >
          Aucun résultat trouvé !
        </p>
      </section>
      <footer class="search-modal__footer">
        <button
          type="button"
          class="btn-green btn-animation"
          aria-label="Close modal"
          @click="$emit('switch-modal-display')"
        >
          Fermer
        </button>
      </footer>
    </div>
  </transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SearchModal",
  data() {
    return {
      searchInput: "",
      filteredResults: [],
    };
  },
  computed: {
    ...mapState("product", {
      products: "datas",
    }),
    filteredList() {
      return this.products.filter((p) => {
        return p.title.toLowerCase().includes(this.searchInput.toLowerCase());
      });
    },
  },
  methods: {
    setInputValue(value) {
      this.searchInput = value.toLowerCase();
      if (value.length) {
        this.filteredResults = this.products.filter((p) =>
          p.title.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      } else {
        this.filteredResults = [];
      }
    },
    navigateToProduct(id) {
      this.$emit("switch-modal-display");
      this.$router.push({ name: "product", params: { productId: id } });
    },
  },
};
</script>

<style scoped>
.search-modal {
  background: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translate(-50%, 0%);
}

.search-modal__header,
.search-modal__footer {
  padding: 15px;
  display: flex;
}

.search-modal__header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: var(--color-secondary);
  justify-content: space-between;
}

.search-modal__footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.search-modal__body {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 10px;
  overflow-y: hidden;
  align-items: center;
}
.search-modal__body > input {
  padding: 4px 8px;
  border: 1px solid var(--color-secondary);
}
.search-modal__body-list {
  overflow-y: scroll;
  width: 90%;
}
.search-modal__body-list-item,
.search-modal__no-result {
  padding: 12px 7px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
}
.search-modal__body-list-item:hover {
  cursor: pointer;
  background: var(--color-secondary);
  color: #fff;
}
.search-modal__body-list-item > span {
  display: flex;
  align-items: center;
  max-width: 167px;
}
.search-modal__body-list-item-img {
  width: 30px;
  height: auto;
}

.search-modal__header-btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  color: var(--color-secondary);
  background: transparent;
}

.btn-green {
  color: white;
  background: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

@media only screen and (min-width: 600px) {
  .search-modal {
    width: 300px;
  }
}
</style>
