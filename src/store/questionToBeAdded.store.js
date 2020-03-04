import createPersistedState from "vuex-persistedstate";

export default {
  namespaced: true,
  plugins: [
    createPersistedState({
      key: "techiwall-state",
      paths: ["questionToBeAdded"]
    })
  ],
  state: {
    questionToBeAdded: {
      question: "",
      answers: [],
      correctAnswerIndex: -1
    }
  },
  getters: {
    existsQuestionToBeAdded: state =>
      state.questionToBeAdded.question !== "" ||
      state.questionToBeAdded.answers.length > 0
  },
  mutations: {
    setQuestionToBeAdded(state, payload) {
      state.questionToBeAdded = payload.questionToBeAdded;
    }
  }
};
