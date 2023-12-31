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
    productDetails: null,
    isSearchModalVisible: false,
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
    setProductDetails(state, productDetails) {
      state.productDetails = productDetails;
    },
    changeModalDisplay(state) {
      state.isSearchModalVisible = !state.isSearchModalVisible;
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
    getProductDetails(context, productId) {
      const data = products;
      context.commit(
        "setProductDetails",
        data.filter((v) => v.id === productId)
      );
    },
    switchModalDisplay(context) {
      context.commit("changeModalDisplay", product);
    },
  },
  getters: {
    productInfo(state) {
      return state.productDetails;
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
    cartLength(state) {
      return state.datas.length;
    },
  },
  mutations: {
    addOne(state, product) {
      const productIndex = state.datas.findIndex((p) => p.id === product.id);
      if (productIndex >= 0) {
        state.datas[productIndex].quantity += product.quantity;
      } else {
        state.datas.push({ ...product });
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
