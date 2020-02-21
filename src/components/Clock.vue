<template>
  <div class="clock" :class="{ '--is-progress': isProgress }">
    <span>{{ secondsLocal }}s</span>
    <div class="progress" v-if="isProgress">
      <span :style="{ width: progress + '%' }"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Clock",
  data() {
    return {
      secondsLocal: 0,
      progress: 100
    };
  },
  props: {
    isProgress: {
      type: Boolean,
      default: false
    },
    seconds: {
      type: Number,
      default: 10
    },
    isStop: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.isStop) {
      this.secondsLocal = this.seconds;
      const secondsInitial = this.secondsLocal;
      const timer = setInterval(() => {
        if (this.secondsLocal > 0) {
          this.secondsLocal -= 1;
        } else {
          this.$emit("finished");
          clearInterval(timer);
        }
      }, 1000);
      if (this.isProgress) {
        const timer2 = setInterval(() => {
          if (this.progress === 0) {
            clearInterval(timer2);
          } else {
            this.progress--;
          }
        }, (secondsInitial + 0.7) * 10);
      }
    }
  }
};
</script>
