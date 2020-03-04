import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import QuestionsService from "../api/QuestionsService";

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
    players: ["JS", "CSS", "HTML", "A11Y", "INTERNET", "Otros", "GIT"],
    questionToBeAdded: {
      question: "",
      answers: [],
      correctAnswerIndex: -1
    },
    currentQuestionIndex: 0,
    points: 0,
    questions: [],
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
    resetPoints(state) {
      state.points = 0;
    },
    incrementPoint(state) {
      state.points += 1;
    },
    setQuestions(state, payload) {
      state.questions = payload.questions;
    },
    setTotalQuestions(state, payload) {
      state.totalQuestions = payload.totalQuestions;
    },
    setQuestionToBeAdded(state, payload) {
      state.questionToBeAdded = payload.questionToBeAdded;
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
  },
  modules: {}
});
