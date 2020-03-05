import CategoriesService from "../api/CategoriesService";

export default {
  namespaced: true,
  state: {
    categories: [
      {
        id: "JS",
        color: "#d4b831"
      },
      {
        id: "CSS",
        color: "#1870b5"
      },
      {
        id: "HTML",
        color: "#dd4b26"
      },
      {
        id: "A11Y",
        color: "#4c4949"
      },
      {
        id: "INTERNET",
        color: "#638bc4"
      },
      {
        id: "GIT",
        color: "#e94d31"
      },
      {
        id: "Otros",
        color: "#929292"
      }
    ]
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
