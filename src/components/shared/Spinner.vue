<template>
  <pacman-loader :color="color"></pacman-loader>
</template>
<script>
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
export default {
  name: "Spinner",
  components: {
    PacmanLoader
  },
  data() {
    return {
      color: getComputedStyle(document.documentElement).getPropertyValue(
        "--color-secondary"
      )
    };
  }
};
</script>
