<template>
  <section class="contribute">
    <p>¿Quieres contribuir con tus propias preguntas?</p>
    <button simple>Contribuir</button>
  </section>
</template>
<script>
export default {
  name: "Contribute"
};
</script>
<style lang="scss">
.contribute {
  background-color: #2d2f50;
  margin-bottom: 0;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
