export default {
  namespaced: true,
  state: {
    user: null,
    isLoggedIn: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      this.isLoggedIn = true;
    },
    clearUser(state) {
      state.user = null;
      this.isLoggedIn = false;
    }
  }
};
