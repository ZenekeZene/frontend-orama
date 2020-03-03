<template>
  <div class="question">
    <h1 v-if="question.wording" v-text="questionLocal.wording"></h1>
    <img height="100" v-if="question.img" :src="question.img" />
    <highlight-code v-if="question.code" :lang="question.code.lang">
      {{ question.code.value }}
    </highlight-code>
    <fade-transition>
      <options
        :options="question.options"
        :correctIndex="Number(question.correctIndex)"
        :showCorrect="showCorrect"
        @optionSelected="selectOption($event)"
      ></options>
    </fade-transition>
    <p class="author" v-if="question.author">
      Contribuida por
      <a href="">{{ question.author }}</a>
    </p>
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
    question: {
      type: Object,
      default: () => {}
    },
    showCorrect: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      questionLocal: this.question
    };
  },
  mounted() {
    //let tags = this.question.declare.match(/(<([^>]+)>)/ig);
    //this.questionLocal.declare = this.questionLocal.declare.replace(/(<([^>]+)>)/ig, "'$1'");
  },
  methods: {
    selectOption(index) {
      this.$emit("optionSelected", index);
    },
    isAnswerCorrect(possibleAnswerCorrectIndex) {
      return possibleAnswerCorrectIndex === this.question.correctIndex;
    }
  }
};
</script>
<style lang="scss">
.question {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;

  img {
    width: calc(100% + 2rem);
    height: 25vh;
    margin: 0 auto;
    margin-left: -1rem;
    border-radius: 0;
  }

  h1 {
    margin-bottom: 1rem;
    padding: 0 1rem 0 0;
    font-size: 1.2rem;
  }

  pre {
    width: calc(100% + 2rem);
    margin-left: -1rem;
  }
}

.author {
  text-align: center;
  font-size: 0.8rem;
  color: #9697c5;
}
</style>
