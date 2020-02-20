<template>
  <button
    simple
    :data-index="index"
    class="option"
    :class="{
      '--correct': isCorrect && showCorrect,
      '--incorrect': !isCorrect && showCorrect
    }"
  >
    <slot></slot>
    <fade-transition>
      <span v-if="showIconNote" class="icon-book"></span>
    </fade-transition>
  </button>
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
    },
    hasNote: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showIconNote() {
      return this.isCorrect && this.showCorrect && this.hasNote;
    }
  }
};
</script>
