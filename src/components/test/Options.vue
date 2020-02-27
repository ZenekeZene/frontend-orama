<template>
  <section style="height: 100%;">
    <answer-transition
      :optionsLength="options.length"
      :class="{ '--is-completed': showCorrect }"
    >
      <li
        v-for="(option, index) in options"
        :key="`option-${index}`"
        :data-index="index"
      >
        <answer
          :index="index"
          :isCorrect="correctIndex === index"
          :showCorrect="showCorrect"
          :class="{ '--selected': optionSelectedIndex === index }"
          @click.native="selectOption(index)"
          >{{ option }}</answer
        >
      </li>
    </answer-transition>
  </section>
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
      if (!this.showCorrect) {
        this.optionSelectedIndex = index;
      }
      this.$emit("optionSelected", index);
    }
  }
};
</script>
<style lang="scss">
.options {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  list-style: none;
  padding: 1rem;

  li {
    flex: 1 1 auto;
    max-height: 70px;
    margin: 0.5rem 0;
    text-align: center;
  }

  button {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    font-family: "Museo Sans Rounded 700";
    border: 3px solid var(--color-primary);
  }
}
</style>
