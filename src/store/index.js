import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    createPersistedState({
      key: "despido-state",
    }),
  ],
  state: {
    players: [],
    title: 'La ruleta del despido',
  },
  getters: {
    getNumOfPlayers: state => state.players.length,
  },
  mutations: {
    addPlayer(state, payload) {
      state.players.unshift(payload.value);
    },
    removePlayer(state, payload) {
      state.players.splice(payload.index, 1);
    },
    clearPlayer(state, payload) {
      state.players.splice(payload.index, 1, "");
    },
    setPlayers(state, payload) {
      state.players = payload.players;
    },
    setTitle(state, payload) {
      state.title = payload.title;
    },
  },
  actions: {},
  modules: {},
});
