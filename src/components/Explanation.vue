<template>
  <section>
    <ul class="options">
      <li>
        <button simple class="option --correct">{{ answerCorrect }}</button>
      </li>
    </ul>
    <div>
      <p v-html="note.description" class="explanation"></p>
      <vue-code-highlight
        v-for="(embed, index) in note.embeds"
        :key="`embed-${index}`"
      >
        {{ embed.value }}
      </vue-code-highlight>
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
      type: Object,
      default: () => {}
    }
  }
};
</script>
