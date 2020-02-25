<template>
  <div class="edit" page>
    <h1 class="title">Nueva pregunta</h1>
    <section class="edit__question">
      <p>Pregunta:</p>
      <div class="input --title">
        <textarea maxlength="140" ref="title" type="text"></textarea>
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
          <li class="input" v-for="(answer, index) in answers" :key="`player-${index}`">
            <input :ref="`player-${index}`" type="text" maxlength="20" v-model="answers[index]" />
            <span class="input__clear" @click="deletePlayer(index)">
              <span class="icon-cross"></span>
            </span>
          </li>
        </fade-transition>
      </ul>
      <button class="add" transparent v-if="answers.length < 5" @click="addPlayer(0)">
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
</template>
<script>
export default {
  name: "Configuration",
  data() {
    return {
      answers: []
    };
  },
  methods: {
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
  }
};
</script>
