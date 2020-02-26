<template>
  <main page>
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      @goBack="handGoBack"
      title="Nueva pregunta"
      :withBack="true"
      :withMenu="false"
    ></header-nav>
    <article class="edit">
      <article class="edit__question">
        <p>Enunciado:</p>
        <div class="input --title">
          <textarea
            v-model="question"
            maxlength="140"
            ref="title"
            type="text"
          ></textarea>
        </div>
        <section class="attachments">
          <span class="icon-image"></span>
        </section>
        <p style="margin-top: 1rem; margin-bottom: 0.5rem;">
          Respuestas:
          <span class="detail">(Min. 2 - Máx. 5)</span>
        </p>
        <fade-transition group tag="ul" class="list">
          <li
            class="input"
            v-for="(answer, index) in answers"
            :key="`player-${index}`"
          >
            <input
              type="radio"
              v-model="correctAnswerIndex"
              :value="index"
              class="--incorrect"
              :class="{ '--correct': correctAnswerIndex === index }"
            />
            <input
              :ref="`player-${index}`"
              type="text"
              maxlength="20"
              v-model="answers[index]"
            />
            <span class="input__clear" @click="deletePlayer(index)">
              <span class="icon-cross"></span>
            </span>
          </li>
        </fade-transition>
        <button
          class="add"
          transparent
          v-if="answers.length < 5"
          @click="addPlayer(0)"
        >
          <span class="icon-plus"></span>Añadir respuesta
        </button>
      </article>
      <aside class="fixed" style="flex-direction: column;">
        <p class="error-message" v-if="errors.length > 0 && flagValidate">
          {{ errors[0].message }}.
        </p>
        <fade-transition>
          <button
            v-if="errors.length === 0"
            class="send hidden-keyboard-opened"
            :class="{ '--disabled': errors.length > 0 }"
            @click="handSend"
            simple
            color-secondary
          >
            Enviar pregunta
          </button>
        </fade-transition>
      </aside>
      <v-dialog
        name="save-dialog"
        :adaptive="true"
        :pivotY="0"
        width="320"
        height="auto"
        transition="fadeInDown"
      ></v-dialog>
    </article>
  </main>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Configuration",
  data() {
    return {
      question: "",
      answers: [],
      correctAnswerIndex: -1,
      validators: [
        {
          message: "Inserta al menos 2 respuestas",
          validator: ({ answers }) => answers.length > 1
        },
        {
          message: "No dejes ninguna respuesta vacía",
          validator: ({ answers }) => answers.every(answer => answer.length > 0)
        },
        {
          message: "Identifica una respuesta como la correcta",
          validator: () =>
            this.correctAnswerIndex >= 0 &&
            this.correctAnswerIndex < this.answers.length
        },
        {
          message: "Inserta el enunciado de la pregunta",
          validator: () => this.question.length > 0
        }
      ],
      errors: [],
      flagValidate: false
    };
  },
  mounted() {
    this.question = this.questionToBeAdded.question;
    this.answers = [...this.questionToBeAdded.answers];
  },
  computed: {
    ...mapState(["questionToBeAdded"]),
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
  watch: {
    answers() {
      this.validate();
    },
    correctAnswerIndex() {
      this.validate();
    }
  },
  methods: {
    ...mapMutations(["setQuestionToBeAdded"]),
    deletePlayer(index) {
      this.answers.splice(index, 1);
    },
    addPlayer(index) {
      if (this.answers.length < 5) {
        this.answers.unshift("");
        if (this.correctAnswerIndex !== -1) {
          this.correctAnswerIndex++;
        }
        this.$nextTick(() => {
          this.$refs[`player-${index}`][0].focus();
        });
      }
      if (!this.flagValidate) this.flagValidate = true;
    },
    handGoBack() {
      if (this.haveBeenChanges) {
        this.handleDialog();
      } else {
        this.$router.back();
      }
    },
    goBack() {
      this.$router.back();
    },
    save() {
      const questionToBeAdded = {
        question: this.question,
        answers: this.answers
      };
      this.setQuestionToBeAdded({ questionToBeAdded });
    },
    validate() {
      this.errors = this.validators.filter(validator => {
        return !validator.validator({
          question: this.question,
          answers: this.answers
        });
      });
    },
    handSend() {
      if (this.errors.length === 0) {
        this.send();
      }
    },
    send() {
      console.log("Send");
    },
    handleDialog() {
      this.$modal.show("dialog", {
        title:
          "¿Quieres guardar la pregunta? Podrás seguir con ella más adelante.",
        text: "Tus cambios se perderán si no los guardas.",
        adaptive: true,
        buttons: [
          {
            title: "No guardar",
            handler: () => {
              this.goBack();
            }
          },
          {
            title: "Cancelar",
            default: true,
            handler: () => {
              this.$modal.hide("dialog");
            }
          },
          {
            title: "Guardar",
            class: "v-dialog-save",
            handler: () => {
              this.save();
              this.goBack();
            }
          }
        ]
      });
    }
  }
};
</script>
