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
<style lang="scss">
.option {
  &:hover:not(.--incorrect) {
    border-color: #b96441;
  }

  &.--incorrect {
    opacity: 0.5 !important;
    transform: scale(0.9);
  }

  &.--correct {
    position: relative;
    opacity: 1 !important;
    background: var(--color-correct) !important;
    border-color: var(--color-correct) !important;
    max-width: 100%;
  }

  &.--selected {
    border: 3px solid var(--color-secondary);
  }

  &.--selected.--incorrect {
    opacity: 1 !important;
    background: var(--color-incorrect) !important;
    border-color: var(--color-incorrect) !important;
  }
}
</style>
