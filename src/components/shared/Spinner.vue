<template>
  <pulse-loader :color="color"></pulse-loader>
</template>
<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "Spinner",
  components: {
    PulseLoader
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
