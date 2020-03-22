import createPersistedState from "vuex-persistedstate";

export default {
  namespaced: true,
  plugins: [
    createPersistedState({
      key: "techiwall-state",
      paths: ["redirectWasLaunched", "tutorialWasLaunched"]
    })
  ],
  state: {
    user: null,
    isLoggedIn: false,
    redirectWasLaunched: false,
    tutorialWasLaunched: false,
    wasSidebarOpened: false
  },
  mutations: {
    setUser(state, payload) {
      if (!payload.user) return;
      const user = {
        displayName: payload.user.displayName,
        photoURL: payload.user.photoURL
      };
      state.user = user;
      state.isLoggedIn = true;
    },
    clearUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    setRedirectWasLaunched(state, payload) {
      state.redirectWasLaunched = payload.redirectWasLaunched;
    },
    setTutorialWasLaunched(state, payload) {
      state.tutorialWasLaunched = payload.tutorialWasLaunched;
    },
    setWasSidebarOpened(state, payload) {
      state.wasSidebarOpened = payload.wasSidebarOpened;
    },
    toggleSidebar(state) {
      state.wasSidebarOpened = !state.wasSidebarOpened;
    }
  }
};
