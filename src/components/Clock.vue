<template>
  <div class="clock">{{ secondsLocal }}s</div>
</template>
<script>
export default {
  name: "Clock",
  data() {
    return {
      secondsLocal: 10
    };
  },
  props: {
    seconds: {
      type: Number,
      default: 10
    }
  },
  mounted() {
    this.secondsLocal = this.seconds;
    const timer = setInterval(() => {
      if (this.secondsLocal > 0) {
        this.secondsLocal--;
      } else {
        this.$emit("finished");
        clearInterval(timer);
      }
    }, 1000);
  }
};
</script>
