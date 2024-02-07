import Vue from "vue";
import Vuex from "vuex";
import { products } from "@/locales/products";
import newProducts from "@/locales/newProducts";
Vue.use(Vuex);

const product = {
  namespaced: true,
  state: {
    datas: [],
    newProducts: [],
    categoryList: [],
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
    getListByCategory(state, category) {
      state.categoryList = state.datas.filter(
        (data) => data.category === category
      );
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
    getCategoryList(context, payload) {
      context.commit("getListByCategory", payload);
    },
  },
  getters: {
    productInfo(state) {
      return state.productDetails;
    },
    categoryList(state) {
      return state.categoryList;
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
        acc += p.quantity * p.price;
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
        product && product.quantity >= 1
          ? (state.datas[productIndex].quantity += product.quantity)
          : (state.datas[productIndex].quantity += 1);
      } else {
        product && product.quantity
          ? state.datas.push({ ...product, quantity: product.quantity })
          : state.datas.push({ ...product, quantity: 1 });
      }
    },
    deleteOne(state, id) {
      const productIndex = state.datas.findIndex((d) => d.id === id);
      state.datas.splice(productIndex, 1);
    },
  },
};

const dropDownsFilters = {
  namespaced: true,
  state: {
    dropdownsStatus: [false, false, false, false],
  },
  mutations: {
    setDropdownsStatus(state, position) {
      const switchedPositionValue = !state.dropdownsStatus[position];
      const newDropdownsStatus = [];
      for (let i = 0; i < state.dropdownsStatus.length; i++) {
        if (i === position) {
          newDropdownsStatus[i] = switchedPositionValue;
        } else {
          newDropdownsStatus[i] = false;
        }
      }
      state.dropdownsStatus = newDropdownsStatus;
    },
  },
};

const store = new Vuex.Store({
  modules: {
    product: product,
    cart: cart,
    dropDownsFilters: dropDownsFilters,
  },
});

export default store;
