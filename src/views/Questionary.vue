<template>
  <section class="questionary" page>
    <div v-if="isLoading" class="spinner-wrapper" key="spinner">
      <BaseSpinner />
    </div>
    <div v-else style="height: 100%;" key="questions">
      <h1 class="category" v-if="question.categories[0]">
        {{ question.categories[0] }}
      </h1>
      <!--<span class="indicator" v-if="points > 0">{{ points }}</span>-->
      <Question
        :question="question"
        :showCorrect="completed"
        @optionSelected="optionSelected"
        :key="`question-${currentQuestionIndex}`"
      />
      <fade-transition appear>
        <Clock
          :isProgress="true"
          :isStop="true"
          :seconds="question.seconds || 10"
          v-if="clockIsVisible"
          @finished="timeFinished"
        />
      </fade-transition>
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
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
      isLoading: false,
      question: null,
      completed: false,
      clockIsVisible: true
    };
  },
  computed: {
    ...mapState([
      "totalQuestions",
      "currentQuestionIndex",
      "points",
      "questions"
    ])
  },
  async created() {
    this.isLoading = true;
    await this.loadQuestion();
    this.isLoading = false;
  },
  methods: {
    ...mapMutations([
      "incrementPoint",
      "incrementCurrentQuestionIndex",
      "resetCurrentQuestionIndex"
    ]),
    ...mapActions(["loadQuestions"]),
    async loadQuestion() {
      if (this.questions.length === 0) {
        await this.loadQuestions();
      }
      this.question = this.questions[this.currentQuestionIndex];
    },
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
.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
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
