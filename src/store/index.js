import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import questionsStore from "./questions.store";
import categoriesStore from "./categories.store";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    createPersistedState({
      key: "despido-state",
      paths: ["questionToBeAdded"]
    })
  ],
  state: {
    questionToBeAdded: {
      question: "",
      answers: [],
      correctAnswerIndex: -1
    },
    points: 0
  },
  getters: {
    existQuestionToBeAdded: state =>
      state.questionToBeAdded.question !== "" ||
      state.questionToBeAdded.answers.length > 0
  },
  mutations: {
    resetPoints(state) {
      state.points = 0;
    },
    incrementPoint(state) {
      state.points += 1;
    },
    setQuestionToBeAdded(state, payload) {
      state.questionToBeAdded = payload.questionToBeAdded;
    }
  },
  modules: {
    categories: categoriesStore,
    questions: questionsStore
  }
});
