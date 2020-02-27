<template>
  <article>
    <p class="subtitle">Enunciado:</p>
    <div style="padding: 0; padding-left: 5px;" class="input --title">
      <textarea-autosize
        v-model="questionLocal"
        :minHeight="30"
        :maxHeight="100"
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
  mounted() {
    if (this.questionToBeAdded.question.length > 0) {
      this.questionLocal = this.questionToBeAdded.question;
    }
  },
  watch: {
    questionLocal() {
      this.$emit("update:question", this.questionLocal);
    }
  },
  computed: {
    ...mapState(["questionToBeAdded"])
  }
};
</script>
<style lang="scss">
.attachments {
  display: flex;
  justify-content: flex-end;

  span {
    padding: 0.5rem;
  }
}
</style>
