<template>
  <article class="questionary" page>
    <span class="indicator"
      >{{ currentQuestionIndex + 1 }}/{{ totalQuestions }}</span
    >
    <question
      :questionLocal="questionLocal"
      :showCorrect="completed"
      @optionSelected="responseIsVisible = true"
      @noteShown="noteIsVisible = $event"
    ></question>
    <fade-transition appear>
      <clock v-if="clockIsVisible" @finished="timeFinished"></clock>
    </fade-transition>
    <fade-transition mode="out-in">
      <button class="next" v-if="responseIsVisible" @click="timeFinished">
        Contestar
      </button>
      <button
        class="next"
        v-if="nextIsVisible && !noteIsVisible"
        @click="nextQuestion"
      >
        Siguiente
      </button>
    </fade-transition>
  </article>
</template>
<script>
import questions from "../../questions/javascript";
import Question from "../components/Question";
import Clock from "../components/Clock";

export default {
  name: "Questionary",
  components: {
    Question,
    Clock
  },
  data() {
    return {
      totalQuestions: questions.length,
      currentQuestionIndex: 0,
      questionLocal: questions[0],
      completed: false,
      nextIsVisible: false,
      clockIsVisible: true,
      responseIsVisible: false,
      noteIsVisible: false,
      noteShown: false
    };
  },
  methods: {
    timeFinished() {
      this.completed = true;
      this.clockIsVisible = false;
      this.nextIsVisible = true;
      this.responseIsVisible = false;
    },
    nextQuestion() {
      if (this.completed) {
        if (this.currentQuestionIndex + 1 === this.totalQuestions) {
          console.log("Final del test");
          this.$router.push("result");
        } else {
          this.currentQuestionIndex++;
          this.questionLocal = questions[this.currentQuestionIndex];
          this.clockIsVisible = true;
          this.completed = false;
          this.nextIsVisible = false;
        }
      }
    }
  }
};
</script>
