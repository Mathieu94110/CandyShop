<template>
  <transition name="modal-fade">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header class="modal-header" id="modalTitle">
        <p>Rechercher des articles</p>
        <button
          type="button"
          class="btn-close"
          @click="$emit('switch-modal-display')"
          aria-label="Close modal"
        >
          x
        </button>
      </header>

      <section class="modal-body" id="modalDescription">
        <input type="text" v-model="searchInput" />
        <ul
          v-show="searchInput && filteredList.length"
          class="search-input-modal-product-list"
        >
          <li
            v-for="product in filteredList"
            :key="product.id"
            class="search-input-modal-product-item"
            @click="navigateToProduct(product.id)"
          >
            <span>{{ product.title }}</span
            ><span
              ><img :src="product.img" class="search-input-modal-product-img"
            /></span>
          </li>
        </ul>
        <p v-if="searchInput && !filteredList.length" class="item-not-found">
          Aucun résultat trouvé !
        </p>
      </section>
      <footer class="modal-footer">
        <button
          type="button"
          class="btn-green btn-animation"
          @click="$emit('switch-modal-display')"
          aria-label="Close modal"
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
};
</script>

<style scoped>
.modal {
  background: #ffffff;
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

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: var(--color-tertiary);
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 10px;
  overflow-y: hidden;
  align-items: center;
}
.modal-body > input {
  padding: 4px 8px;
  width: 90%;
}
.search-input-modal-product-list {
  overflow-y: scroll;
  width: 90%;
}
.search-input-modal-product-item,
.item-not-found {
  padding: 12px 7px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
}
.search-input-modal-product-item:hover {
  cursor: pointer;
  background: var(--color-tertiary);
  color: #fff;
}
.search-input-modal-product-item > span {
  display: flex;
  align-items: center;
  max-width: 167px;
}
.search-input-modal-product-img {
  width: 30px;
  height: auto;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  color: var(--color-tertiary);
  background: transparent;
}

.btn-green {
  color: white;
  background: var(--color-tertiary);
  border: 1px solid var(--color-tertiary);
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
  .modal {
    width: 300px;
  }
}
</style>
