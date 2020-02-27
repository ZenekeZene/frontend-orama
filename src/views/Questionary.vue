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
import { mapState, mapMutations } from "vuex";
import questions from "../../questions/javascript";
import Question from "@/components/test/Question";
import Clock from "@/components/test/Clock";

export default {
  name: "Questionary",
  components: {
    Question,
    Clock
  },
  data() {
    return {
      questionLocal: questions[0],
      completed: false,
      clockIsVisible: true
    };
  },
  computed: {
    ...mapState(["totalQuestions", "currentQuestionIndex"])
  },
  mounted() {
    this.questionLocal = questions[this.currentQuestionIndex];
    this.resetPoints();
    this.setTotalQuestions({ totalQuestions: questions.length });
  },
  methods: {
    ...mapMutations([
      "incrementPoint",
      "setTotalQuestions",
      "resetPoints",
      "incrementCurrentQuestionIndex",
      "resetCurrentQuestionIndex"
    ]),
    optionSelected(index) {
      this.answerIndexSelected = index;
      if (this.questionLocal.correctIndex === index) {
        this.incrementPoint();
      }
      this.timeFinished();
    },
    timeFinished() {
      this.completed = true;
      this.clockIsVisible = false;
      setTimeout(() => {
        this.nextQuestion();
      }, 2000);
    },
    nextQuestion() {
      this.incrementCurrentQuestionIndex();
      if (this.currentQuestionIndex === this.totalQuestions) {
        this.$router.push({ name: "Result" });
        this.resetCurrentQuestionIndex();
      } else {
        this.$router.push({ name: "Home", params: { angularVelocity: 10 } });
      }
    }
  }
};
</script>
