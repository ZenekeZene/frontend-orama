<template>
  <div class="question">
    <h1>{{ questionLocal.declare }}</h1>
    <img v-if="questionLocal.img" :src="questionLocal.img" />
    <highlight-code lang="css" v-if="this.questionLocal.declare2">{{
      questionLocal.declare2.value
    }}</highlight-code>
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
import Options from "./Options";

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
