<template>
  <article class="result" page>
    <span class="icon-home" @click="goToStart"></span>
    <h1>Resultado: {{ points }} / {{ totalQuestions }}</h1>
    <img src="../assets/scan_QR.svg" class="result__image" />
  </article>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Result",
  computed: {
    ...mapState(["points", "totalQuestions"])
  },
  methods: {
    goToStart() {
      this.$router.push("/");
    }
  }
};
</script>
