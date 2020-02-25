<template>
  <section class="contribute" style="margin-bottom: 0">
    <p>¿Quieres contribuir con tus propias preguntas?</p>
    <button simple @click="goToEdit">Contribuir</button>
  </section>
</template>
<script>
export default {
  name: "Contribute",
  methods: {
    goToEdit() {
      this.$router.push("edit");
      this.$emit("onToggleCollapse", false);
    }
  }
};
</script>
<style lang="scss">
.contribute {
  background-color: #2d2f50;
  margin-top: auto;
  margin-bottom: 0;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
