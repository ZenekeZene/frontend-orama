<template>
  <section class="questionary" page>
    <h1 class="category">{ Vue }</h1>
    <span class="indicator" v-if="points > 0">Aciertos: {{ points }}</span>
    <question
      :question="question"
      :showCorrect="completed"
      @optionSelected="optionSelected"
      :key="`question-${currentQuestionIndex}`"
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
  </section>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import questions from "../../questions/questions";
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
      question: null,
      completed: false,
      clockIsVisible: true
    };
  },
  computed: {
    ...mapState(["totalQuestions", "currentQuestionIndex", "points"])
  },
  created() {
    if (questions[this.currentQuestionIndex]) {
      this.question = { ...questions[this.currentQuestionIndex] };
    } else {
      console.log("Algo fue mal");
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    ...mapMutations([
      "incrementPoint",
      "incrementCurrentQuestionIndex",
      "resetCurrentQuestionIndex"
    ]),
    optionSelected(index) {
      this.answerIndexSelected = index;
      if (this.question.correctIndex === index) {
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
      if (this.currentQuestionIndex < this.totalQuestions - 1) {
        this.incrementCurrentQuestionIndex();
        this.$router.push({ name: "Home" });
      } else if (this.currentQuestionIndex === this.totalQuestions - 1) {
        this.$router.push({ name: "Result" });
        this.resetCurrentQuestionIndex();
      }
    }
  }
};
</script>
<style lang="scss">
.questionary {
  height: 100%;
  padding: 3rem 1rem;
}

.indicator {
  position: absolute;
  top: 0.7rem;
  right: 1rem;
  z-index: 1;
  padding: 0.5rem;
  color: white;
  background-color: var(--color-primary);
}
</style>
