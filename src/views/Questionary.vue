<template>
  <article class="questionary" page>
    <span class="indicator"
      >{{ currentQuestionIndex + 1 }}/{{ totalQuestions }}</span
    >
    <question
      :questionLocal="questionLocal"
      :showCorrect="completed"
      @optionSelected="optionSelected"
    ></question>
    <fade-transition appear>
      <clock
        :isProgress="true"
        :isStop="true"
        :seconds="10"
        v-if="clockIsVisible"
        @finished="timeFinished"
      ></clock>
    </fade-transition>
  </article>
</template>
<script>
import { mapMutations } from "vuex";
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
      totalQuestions: 1,
      currentQuestionIndex: 0,
      questionLocal: questions[0],
      completed: false,
      clockIsVisible: true
    };
  },
  mounted() {
    this.resetPoints();
    this.setTotalQuestions({ totalQuestions: this.totalQuestions });
  },
  methods: {
    ...mapMutations(["incrementPoint", "setTotalQuestions", "resetPoints"]),
    timeFinished() {
      this.completed = true;
      this.clockIsVisible = false;
      setTimeout(() => {
        this.nextQuestion();
      }, 2000);
    },
    nextQuestion() {
      this.$router.push({ name: "Home", params: { angularVelocity: 10 } });
    },
    optionSelected(index) {
      this.answerIndexSelected = index;
      if (this.questionLocal.correctIndex === index) {
        this.incrementPoint();
      }
      this.timeFinished();
    }
  }
};
</script>
