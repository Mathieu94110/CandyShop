<template>
  <transition appear>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">
        <img src="../../assets/candy-shop.png" width="50" height="50" />
        <h1>CandyShop</h1>
      </a>
      <button v-trigger-collapse="'collapse'" class="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="collapse" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: page === 'User' }"
              @click="changePage('User')"
              >Boutique</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: page === 'Admin' }"
              @click="changePage('Admin')"
              >Admin</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>
import { eventBus } from "../../main";

export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener("click", () => {
          nav.classList.remove("show");
        });
        const nav = document.querySelector(`#${binding.value}`);
        el.addEventListener("click", (e) => {
          if (nav.classList.contains("show")) {
            nav.classList.remove("show");
          } else {
            nav.classList.add("show");
          }
          e.stopPropagation();
        });
      },
    },
  },
  data() {
    return {
      page: eventBus.page,
    };
  },
  created() {
    eventBus.$on("update:page", (page) => {
      this.page = page;
    });
  },
  methods: {
    changePage(page) {
      eventBus.changePage(page);
    },
  },
};
</script>

<style scoped>
.navbar-nav > :hover {
  cursor: pointer;
}
h1 {
  display: inline;
  font-size: 1em;

  background-image: linear-gradient(225deg, #ff034f, #289bff);
  filter: drop-shadow(0 20px 30px #28d8ff33);
  color: black;
  background-clip: text;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
}
@keyframes fromtop {
  from {
    transform: translateY(-20px);
  }
  to {
  }
}
.v-enter-active {
  animation: fromtop 1s;
}
</style>