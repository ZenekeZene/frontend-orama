import Vue from "vue";
import QuestionsService from "../api/QuestionsService";

export default {
  namespaced: true,
  state: {
    questions: [],
    currentQuestionIndex: 0
  },
  getters: {
    totalQuestions: state => state.questions.length
  },
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload.questions;
    },
    setQuestionCode(state, payload) {
      Vue.set(
        state.questions[state.currentQuestionIndex].code,
        "value",
        payload.code
      );
    },
    setQuestionTitle(state, payload) {
      Vue.set(
        state.questions[state.currentQuestionIndex],
        "wording",
        payload.title
      );
    },
    incrementCurrentQuestionIndex(state) {
      state.currentQuestionIndex++;
    },
    resetCurrentQuestionIndex(state) {
      state.currentQuestionIndex = 0;
    }
  },
  actions: {
    async loadQuestions({ commit }) {
      return new Promise(resolve => {
        const questionsService = new QuestionsService();
        questionsService.loadAll().then(questions => {
          commit("setQuestions", { questions });
          resolve(questions);
        });
      });
    }
  }
};
