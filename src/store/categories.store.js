export default {
  namespaced: true,
  state: {
    categories: ["JS", "CSS", "HTML", "A11Y", "INTERNET", "Otros", "GIT"]
  },
  getters: {
    getNumOfCategories: state => state.categories.length
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
  }
};
