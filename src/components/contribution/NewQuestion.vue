<template>
  <article>
    <p class="subtitle">Enunciado:</p>
    <div class="input --title">
      <textarea-autosize
        v-model="questionLocal"
        :min-height="30"
        :max-height="100"
        maxlength="135"
        type="text"
      ></textarea-autosize>
    </div>
    <section class="attachments">
      <span class="icon-image"></span>
    </section>
  </article>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "NewQuestion",
  data() {
    return {
      questionLocal: this.question
    };
  },
  computed: {
    ...mapState(["questionToBeAdded"])
  },
  watch: {
    questionLocal() {
      this.$emit("update:question", this.questionLocal);
    }
  },
  mounted() {
    if (this.questionToBeAdded.question.length > 0) {
      this.questionLocal = this.questionToBeAdded.question;
    }
  }
};
</script>
<style lang="scss" scoped>
.input.--title {
  padding: 0;
  padding-left: 5px;
}

.attachments {
  display: flex;
  justify-content: flex-end;

  span {
    padding: 0.5rem;
  }
}
</style>
