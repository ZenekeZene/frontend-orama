<template>
  <div class="questionary">
    <h1>{{ questionLocal.title }}</h1>
    <options
      v-if="!noteIsVisible"
      :options="questionLocal.options"
      :correctIndex="questionLocal.correctIndex"
      :hasNote="questionLocal.note.length > 0"
      :showCorrect="completed"
      :forceReset="forceReset"
      @optionSelected="selectOption($event)"
    ></options>
    <explanation
      v-else
      :answerCorrect="questionLocal.options[questionLocal.correctIndex]"
      :note="questionLocal.note"
    ></explanation>
    <fade-transition>
      <clock v-if="clockIsVisible" @finished="timeFinished"></clock>
    </fade-transition>
    <button class="next" v-if="noteIsVisible" @click="returnToQuestion">
      Atrás
    </button>
    <button
      class="next"
      v-if="nextIsVisible && !noteIsVisible"
      @click="nextQuestion"
    >
      Siguiente
    </button>
  </div>
</template>
<script>
import Clock from "../components/Clock";
import Explanation from "../components/Explanation";
import Options from "../components/Options";
import question from "../../questions/javascript";

export default {
  name: "Questionary",
  components: {
    Clock,
    Explanation,
    Options,
  },
  watch: {
    questionLocal() {
      this.forceReset = true;
      this.$nextTick(() => {
        this.forceReset = false;
      })
    },
  },
  data() {
    return {
      questionLocal: question[0],
      completed: false,
      nextIsVisible: false,
      clockIsVisible: true,
      noteIsVisible: false,
      forceReset: false,
    };
  },
  methods: {
    timeFinished() {
      this.completed = true;
      this.clockIsVisible = false;
      this.nextIsVisible = true;
    },
    selectOption(index) {
      if (
        this.completed &&
        this.isAnswerCorrect(index) &&
        this.questionLocal.note.length > 0
      ) {
        this.noteIsVisible = true;
      }
    },
    isAnswerCorrect(possibleAnswerCorrectIndex) {
      return possibleAnswerCorrectIndex === this.questionLocal.correctIndex;
    },
    returnToQuestion() {
      this.noteIsVisible = false;
    },
    nextQuestion() {
      if (this.completed) {
        this.questionLocal = question[Math.round(Math.random())];
        this.clockIsVisible = true;
        this.completed = false;
      }
    },
  },
};
</script>
