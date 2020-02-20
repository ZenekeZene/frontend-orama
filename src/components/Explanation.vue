<template>
  <section class="explanation">
    <div class="explanation__wrapper">
      <div class="explanation__section">
        <div v-for="(step, index) in note" :key="`step-${index}`">
          <p v-if="!step.type" v-html="step" class="explanation__description">
            {{ step }}
          </p>
          <vue-code-highlight v-else>{{ step.value }}</vue-code-highlight>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { component as VueCodeHighlight } from "vue-code-highlight";
export default {
  name: "Explanation",
  components: {
    VueCodeHighlight
  },
  props: {
    answerCorrect: {
      type: String,
      default: ""
    },
    note: {
      type: Array,
      default: () => []
    }
  }
};
</script>
