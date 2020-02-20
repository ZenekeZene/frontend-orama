<template>
  <article class="result" page>
    <h1>Resultado:{{ points }} / {{ totalQuestions }}</h1>
  </article>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Result",
  computed: {
    ...mapState(["points", "totalQuestions"])
  }
};
</script>
