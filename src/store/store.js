import Vue from "vue";
import Vuex from "vuex";
import { products } from "@/locales/products";
import { newProducts } from "@/locales/newProducts";
Vue.use(Vuex);

const product = {
  namespaced: true,
  state: {
    datas: [],
    newProducts: [],
  },
  mutations: {
    addOne(state, product) {
      state.datas.push({ ...product, id: state.datas.length + 1 + "" });
    },
    addMany(state, products) {
      state.datas = products;
    },
    addNewProducts(state, products) {
      state.newProducts = products;
    },
  },
  actions: {
    fetchDatas(context) {
      const data = products;
      context.commit(
        "addMany",
        Object.keys(data).map((key) => data[key])
      );
    },
    fetchNewProducts(context) {
      const data = newProducts;
      context.commit(
        "addNewProducts",
        Object.keys(data).map((key) => data[key])
      );
    },
    saveOne(context, product) {
      context.commit("addOne", product);
    },
  },
};

const cart = {
  namespaced: true,
  state: {
    datas: [],
  },
  getters: {
    total(state) {
      return state.datas.reduce((acc, p) => {
        acc += p.price * p.quantity;
        return acc;
      }, 0);
    },
  },
  mutations: {
    addOne(state, product) {
      const productIndex = state.datas.findIndex((p) => p.id === product.id);
      if (productIndex >= 0) {
        state.datas[productIndex].quantity += 1;
      } else {
        state.datas.push({ ...product, quantity: 1 });
      }
    },
    deleteOne(state, id) {
      const productIndex = state.datas.findIndex((d) => d.id === id);
      state.datas.splice(productIndex, 1);
    },
  },
};

const store = new Vuex.Store({
  modules: {
    product,
    cart,
  },
});

export default store;
