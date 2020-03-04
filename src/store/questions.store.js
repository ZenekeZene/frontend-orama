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
        questionsService.loadQuestions().then(questions => {
          commit("setQuestions", { questions });
          resolve(questions);
        });
      });
    }
  }
};
