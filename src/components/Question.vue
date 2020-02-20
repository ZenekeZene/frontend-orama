<template>
  <div class="question" :class="{ '--expanded': noteIsVisible }">
    <h1>{{ questionLocal.title }}</h1>
    <fade-transition mode="out-in">
      <options
        v-if="!noteIsVisible"
        key="options"
        :options="questionLocal.options"
        :correctIndex="questionLocal.correctIndex"
        :hasNote="questionLocal.note.length > 0"
        :showCorrect="showCorrect"
        :forceReset="forceReset"
        @optionSelected="selectOption($event)"
      ></options>
      <explanation
        v-else
        key="explanation"
        :answerCorrect="questionLocal.options[questionLocal.correctIndex]"
        :note="questionLocal.note"
        ><span class="back" v-if="noteIsVisible" @click="returnToQuestion"
          >Atrás</span
        >
      </explanation>
    </fade-transition>
  </div>
</template>
<script>
import Explanation from "../components/Explanation";
import Options from "../components/Options";

export default {
  name: "Question",
  components: {
    Explanation,
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
  watch: {
    questionLocal() {
      this.forceReset = true;
      this.$nextTick(() => {
        this.forceReset = false;
      });
    },
    noteIsVisible(value) {
      this.$emit("noteShown", value);
    }
  },
  data() {
    return {
      noteIsVisible: false,
      forceReset: false
    };
  },
  methods: {
    selectOption(index) {
      if (
        this.showCorrect &&
        this.isAnswerCorrect(index) &&
        this.questionLocal.note.length > 0
      ) {
        this.noteIsVisible = true;
      } else {
        this.$emit("optionSelected");
      }
    },
    isAnswerCorrect(possibleAnswerCorrectIndex) {
      return possibleAnswerCorrectIndex === this.questionLocal.correctIndex;
    },
    returnToQuestion() {
      this.noteIsVisible = false;
    }
  }
};
</script>
