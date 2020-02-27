<template>
  <div page class="visit-book" :class="{ '--expanded': expanded }">
    <h3 v-if="expanded">VISIT BOOK</h3>
    <span
      v-if="!expanded"
      @click="expanded = !expanded"
      class="icon-to-launch icon-pen"
    ></span>
    <span
      v-if="expanded"
      @click="expanded = !expanded"
      class="icon-to-close icon-close"
    ></span>
    <div v-if="expanded" class="visit-book__panel">
      <textarea-autosize
        rows="1"
        maxlength="120"
        :minHeight="1"
        :maxHeight="160"
        placeholder="¡Envianos un saludo!"
      ></textarea-autosize>
      <button-custom v-ripple style="margin-top: 1rem" simple
        >Enviar</button-custom
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "VisitBook",
  data() {
    return {
      expanded: false
    };
  }
};
</script>
<style lang="scss">
.visit-book {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: block;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  transition: all 150ms ease-in;

  &.--expanded {
    width: 18rem;
    height: 100%;
  }

  [class^="icon"] {
    padding: 1rem;
    cursor: pointer;
  }

  .icon-to-launch {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .icon-to-close {
    position: absolute;
    right: 0;
    top: 0;
  }

  textarea::placeholder {
    color: white;
    opacity: 0.5;
  }

  &__panel {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
  }
}
</style>
