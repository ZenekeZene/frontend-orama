<template>
  <main page>
    <TheHeader
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      @goBack="handGoBack"
      title="Nueva pregunta"
      :withBack="true"
      :withMenu="false"
    />
    <div class="edit">
      <article class="edit__question">
        <NewQuestion :question.sync="question" />
        <NewAnswers
          :answers.sync="answers"
          :correctAnswerIndex.sync="correctAnswerIndex"
        />
      </article>
      <aside class="errors fixed">
        <p class="error-message" v-if="haveErrors && flagValidate">
          {{ errors[0].message }}.
        </p>
        <fade-transition>
          <button
            v-if="!haveErrors"
            class="send hidden-keyboard-opened"
            :class="{ '--disabled': haveErrors }"
            @click="handSend"
            simple
            color-secondary
          >
            Enviar pregunta
          </button>
        </fade-transition>
      </aside>
      <VDialog
        name="save-dialog"
        :adaptive="true"
        :pivotY="0"
        width="320"
        height="auto"
        transition="fadeInDown"
      />
    </div>
  </main>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { answersValidation } from "@/mixins/NewQuestionValid";
import SaveNewQuestion from "@/mixins/SaveNewQuestion.dialog";
import NewQuestion from "@/components/contribution/NewQuestion.vue";
import NewAnswers from "@/components/contribution/NewAnswers.vue";

export default {
  name: "Configuration",
  components: {
    NewQuestion,
    NewAnswers
  },
  mixins: [answersValidation, SaveNewQuestion],
  data() {
    return {
      question: "",
      answers: [],
      correctAnswerIndex: -1
    };
  },
  computed: {
    ...mapState("questionToBeAdded", ["questionToBeAdded"]),
    haveBeenChanges() {
      const diffAnswers = this.answers.filter(x =>
        this.questionToBeAdded.answers.includes(x)
      );
      return (
        this.answers.length !== this.questionToBeAdded.answers.length ||
        this.answers.length != diffAnswers.length ||
        this.question !== this.questionToBeAdded.question
      );
    }
  },
  methods: {
    ...mapMutations("questionToBeAdded", ["setQuestionToBeAdded"]),
    save() {
      const questionToBeAdded = {
        question: this.question,
        answers: this.answers,
        correctAnswerIndex: this.correctAnswerIndex
      };
      this.setQuestionToBeAdded({ questionToBeAdded });
    },
    handSend() {
      if (this.errors.length === 0) {
        this.send();
      }
    },
    send() {
      console.log("Send");
    }
  }
};
</script>
<style lang="scss">
.errors {
  flex-direction: column;
  text-align: center;
}

.error-message {
  color: var(--color-incorrect);
  padding-bottom: 0.5rem;
}
</style>
