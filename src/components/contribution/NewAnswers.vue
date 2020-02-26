<template>
  <article>
    <p class="subtitle" style="margin-top: -21px; margin-bottom: 0.5rem;">
      Respuestas:
      <span class="detail">(Min. 2 - Máx. 5)</span>
    </p>
    <fade-transition group tag="ul" class="list">
      <li
        class="input"
        v-for="(answer, index) in answersLocal"
        :key="`player-${index}`"
      >
        <input
          type="radio"
          v-model="correctAnswerIndex"
          :value="index"
          class="--incorrect"
          :class="{ '--correct': correctAnswerIndex === index }"
        />
        <textarea-autosize
          :ref="`player-${index}`"
          rows="1"
          maxlength="70"
          :maxHeight="60"
          placeholder="Inserta aquí tu respuesta"
          v-model="answers[index]"
          :class="{
            '--correct': correctAnswerIndex === index,
            '--incorrect': correctAnswerIndex !== index
          }"
        ></textarea-autosize>
        <span class="input__clear" @click="removeAnswer(index)">
          <span class="icon-cross"></span>
        </span>
      </li>
    </fade-transition>
    <button
      class="add"
      transparent
      v-if="answersLocal.length < 5"
      @click="addAnswer(0)"
    >
      <span class="icon-plus"></span>Añadir respuesta
    </button>
  </article>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "NewAnswers",
  props: {
    answers: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      answersLocal: this.answers,
      correctAnswerIndex: -1
    };
  },
  watch: {
    answersLocal() {
      this.$emit("update:answers", this.answersLocal);
    },
    correctAnswerIndex() {
      this.$emit("update:correctAnswerIndex", this.correctAnswerIndex);
    }
  },
  computed: {
    ...mapState(["questionToBeAdded"])
  },
  mounted() {
    if (this.questionToBeAdded.answers.length > 0) {
      this.answersLocal = [...this.questionToBeAdded.answers];
    }

    if (this.questionToBeAdded.correctAnswerIndex !== -1) {
      this.correctAnswerIndex = this.questionToBeAdded.correctAnswerIndex;
    }
  },
  methods: {
    removeAnswer(index) {
      this.answersLocal.splice(index, 1);
    },
    addAnswer(index) {
      if (this.answersLocal.length < 5) {
        this.answersLocal.unshift("");
        if (this.correctAnswerIndex !== -1) {
          this.correctAnswerIndex++;
        }
        this.focusOnAnswer(index);
      }
      if (!this.flagValidate) this.flagValidate = true;
    },
    focusOnAnswer(indexAnswer) {
      this.$nextTick(() => {
        this.$refs[`player-${indexAnswer}`][0].$el.focus();
      });
    }
  }
};
</script>
