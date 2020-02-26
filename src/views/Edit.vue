<template>
  <div page>
    <header-nav
      @onToggleCollapse="$emit('onToggleCollapse', $event)"
      @goBack="handGoBack"
      title="Nueva pregunta"
      :withBack="true"
      :withMenu="false"
    ></header-nav>
    <div class="edit">
      <section class="edit__question">
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
        <ul class="list">
          <fade-transition group>
            <li
              class="input"
              v-for="(answer, index) in answers"
              :key="`player-${index}`"
            >
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
        </ul>
        <button
          class="add"
          transparent
          v-if="answers.length < 5"
          @click="addPlayer(0)"
        >
          <span class="icon-plus"></span>Añadir respuesta
        </button>
      </section>
      <section class="fixed">
        <button class="send" simple color-secondary>Enviar pregunta</button>
      </section>
      <v-dialog
        name="save-dialog"
        :adaptive="true"
        :pivotY="0"
        width="320"
        height="auto"
        transition="fadeInDown"
      ></v-dialog>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Configuration",
  data() {
    return {
      question: "",
      answers: []
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
  methods: {
    ...mapMutations(["setQuestionToBeAdded"]),
    deletePlayer(index) {
      this.answers.splice(index, 1);
    },
    addPlayer(index) {
      if (this.answers.length < 5) {
        this.answers.unshift("");
        this.$nextTick(() => {
          this.$refs[`player-${index}`][0].focus();
        });
      }
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
