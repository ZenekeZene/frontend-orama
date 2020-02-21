<template>
  <div class="question">
    <h1>{{ questionLocal.title }}</h1>
    <fade-transition>
      <options
        key="options"
        :options="questionLocal.options"
        :correctIndex="questionLocal.correctIndex"
        :showCorrect="showCorrect"
        @optionSelected="selectOption($event)"
      ></options>
    </fade-transition>
  </div>
</template>
<script>
import Options from "../components/Options";

export default {
  name: "Question",
  components: {
    Options
  },
  props: {
    questionLocal: {
      type: Object,
      default: () => {}
    },
    showCorrect: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectOption(index) {
      this.$emit("optionSelected", index);
    },
    isAnswerCorrect(possibleAnswerCorrectIndex) {
      return possibleAnswerCorrectIndex === this.questionLocal.correctIndex;
    }
  }
};
</script>
