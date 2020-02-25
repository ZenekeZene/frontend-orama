<template>
  <button-custom
    simple
    class="option"
    :class="{
      '--correct': isCorrect && showCorrect,
      '--incorrect': !isCorrect && showCorrect
    }"
  >
    <slot></slot>
  </button-custom>
</template>
<script>
export default {
  name: "Answer",
  props: {
    index: {
      type: Number,
      default: -1
    },
    correctIndex: {
      type: Number,
      default: -1
    },
    isCorrect: {
      type: Boolean,
      default: false
    },
    showCorrect: {
      type: Boolean,
      default: false
    }
  }
};
</script>
