<template>
  <div class="question">
    <h1 ref="wording" v-html="questionLocal.wording"></h1>
    <img height="100" v-if="questionLocal.img" :src="questionLocal.img" />
    <highlight-code v-if="questionLocal.code" :lang="questionLocal.code.lang">
      {{ questionLocal.code.value }}
    </highlight-code>
    <fade-transition>
      <options
        :options="questionLocal.options"
        :correctIndex="Number(questionLocal.correctIndex)"
        :showCorrect="showCorrect"
        @optionSelected="selectOption($event)"
      />
    </fade-transition>
    <p class="author" v-if="questionLocal.author">
      Contribuida por
      <a href>{{ questionLocal.author }}</a>
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
      default: () => {},
      required: true
    },
    showCorrect: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    questionLocal() {
      return { ...this.question };
    }
  },
  mounted() {
    console.log(this.$refs.wording.textContent);
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
