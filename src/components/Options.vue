<template>
  <ul class="options" :class="{ '--is-completed': showCorrect }">
    <answer-transition :optionsLength="options.length">
      <answer
        v-for="(option, index) in options"
        :key="`option-${index}`"
        :index="index"
        :isCorrect="correctIndex === index"
        :showCorrect="showCorrect"
        :hasNote="hasNote"
        :class="{ '--selected': optionSelectedIndex === index }"
        @click.native="selectOption(index)"
        >{{ option }}</answer
      >
    </answer-transition>
  </ul>
</template>
<script>
import Answer from "./Answer";
import AnswerTransition from "./AnswerTransition";

export default {
  name: "Options",
  components: {
    Answer,
    AnswerTransition
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    correctIndex: {
      type: Number,
      default: -1
    },
    hasNote: {
      type: Boolean,
      default: false
    },
    showCorrect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      optionSelectedIndex: -1
    };
  },
  methods: {
    selectOption(index) {
      this.optionSelectedIndex = index;
      this.$emit("optionSelected", index);
    }
  }
};
</script>
