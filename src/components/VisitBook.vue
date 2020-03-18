<template>
  <div page class="visit-book" :class="{ '--expanded': expanded }">
    <h3 v-if="expanded">VISIT BOOK</h3>
    <p>
      En Front-end-ORAMA valoramos tu opinión. Si quieres darnos tu feedback o
      consultar cualquier cosa, este es el lugar. Si por otro lado, prefieres
      insultaros, estaremos encantados de mandarte a la mierda.
    </p>
    <span
      v-if="!expanded"
      @click="launch"
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
        ref="textarea"
      ></textarea-autosize>
      <base-button v-ripple style="margin-top: 1rem" simple>Enviar</base-button>
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
  },
  watch: {
    expanded() {
      this.$emit("expandedVisitBook", this.expanded);
    }
  },
  methods: {
    launch() {
      this.expanded = !this.expanded;
      this.$nextTick(() => {
        this.$refs.textarea.$el.focus();
      });
    }
  }
};
</script>
<style lang="scss">
@import "../assets/styles/base/breakpoints.scss";

.visit-book {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  width: 3rem;
  height: 3rem;
  padding: 1rem;

  @include mq($until: phablet) {
    display: none;
  }

  &.--expanded {
    width: 18rem;
    height: 100%;
    background-color: #007b7b;
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
    min-height: 8rem;
    padding: 1rem;
  }
}
</style>
