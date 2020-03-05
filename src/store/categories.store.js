import CategoriesService from "../api/CategoriesService";

export default {
  namespaced: true,
  state: {
    categories: []
  },
  getters: {
    numOfCategories: state => state.categories.length
  },
  mutations: {
    addCategory(state, payload) {
      state.categories.unshift(payload.value);
    },
    removeCategory(state, payload) {
      state.categories.splice(payload.index, 1);
    },
    clearCategory(state, payload) {
      state.categories.splice(payload.index, 1, "");
    },
    setCategories(state, payload) {
      state.categories = payload.categories;
    }
  },
  actions: {
    loadCategories({ commit }) {
      return new Promise(resolve => {
        const categoriesService = new CategoriesService();
        categoriesService.loadAll().then(categories => {
          commit("setCategories", { categories });
          resolve(categories);
        });
      });
    }
  }
};
