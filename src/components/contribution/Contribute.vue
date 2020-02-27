<template>
  <section class="contribute">
    <p v-if="!existQuestionToBeAdded">
      ¿Quieres contribuir con tus propias preguntas?
    </p>
    <p v-if="existQuestionToBeAdded">
      Tienes una pregunta a medias, ¡termina de enviarla!
    </p>
    <button-custom simple v-ripple @click="goToEdit">Contribuir</button-custom>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Contribute",
  computed: {
    ...mapGetters(["existQuestionToBeAdded"])
  },
  methods: {
    goToEdit() {
      if (this.$route.path !== "/edit") {
        this.$router.push("edit");
        this.$emit("onToggleCollapse", false);
      }
    }
  }
};
</script>
<style lang="scss">
.contribute {
  margin-top: auto;
  margin-bottom: 0;
  background-color: #2d2f50;

  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
