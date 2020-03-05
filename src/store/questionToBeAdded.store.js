export default {
  namespaced: true,

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
