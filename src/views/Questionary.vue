<template>
  <article class="questionary" page>
    <question
      :questionLocal="questionLocal"
      :showCorrect="completed"
      @optionSelected="responseIsVisible = true"
      @noteShown="noteIsVisible = $event"
    ></question>
    <fade-transition>
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
import question from "../../questions/javascript";
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
      questionLocal: question[0],
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
        this.questionLocal = question[Math.round(Math.random())];
        this.clockIsVisible = true;
        this.completed = false;
        this.nextIsVisible = false;
      }
    }
  }
};
</script>
