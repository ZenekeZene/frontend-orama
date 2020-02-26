import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  plugins: [
    createPersistedState({
      key: "despido-state",
      paths: ["title", "questionToBeAdded"]
    })
  ],
  state: {
    players: ["JS", "CSS", "HTML", "A11y", "Vue", "React", "Semántica"],
    title: "Front-End-ORAMA",
    questionToBeAdded: {
      question: "",
      answers: [],
      correctAnswerIndex: -1
    },
    points: 0,
    totalQuestions: 0
  },
  getters: {
    getNumOfPlayers: state => state.players.length,
    existQuestionToBeAdded: state =>
      state.questionToBeAdded.question !== "" ||
      state.questionToBeAdded.answers.length > 0
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
    resetPoints(state) {
      state.points = 0;
    },
    incrementPoint(state) {
      state.points += 1;
    },
    setTotalQuestions(state, payload) {
      state.totalQuestions = payload.totalQuestions;
    },
    setQuestionToBeAdded(state, payload) {
      state.questionToBeAdded = payload.questionToBeAdded;
    }
  },
  actions: {},
  modules: {}
});
