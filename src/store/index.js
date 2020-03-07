import Vue from "vue";
import Vuex from "vuex";
import questionToBeAdded from "./questionToBeAdded.store";
import questions from "./questions.store";
import categories from "./categories.store";
import user from "./user.store";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    createPersistedState({
      key: "techiwall-state",
      paths: [
        "questionToBeAdded.questionToBeAdded",
        "user.redirectWasLaunched",
        "user.wasSidebarOpened"
      ]
    })
  ],
  state: {
    points: 0
  },
  mutations: {
    resetPoints(state) {
      state.points = 0;
    },
    incrementPoint(state) {
      state.points += 1;
    }
  },
  modules: {
    user,
    questionToBeAdded,
    categories,
    questions
  }
});
