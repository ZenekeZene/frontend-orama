<template>
  <div class="clock">{{ seconds }}s</div>
</template>
<script>
export default {
  name: "Clock",
  data() {
    return {
      seconds: 20
    };
  },
  mounted() {
    const timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.$emit("finished");
        clearInterval(timer);
      }
    }, 1000);
  }
};
</script>
