<template>
  <div
    class="clock"
    :class="{
      '--is-progress': isProgress,
      '--last-seconds': effectLastSeconds
    }"
  >
    <span>{{ secondsLocal }}s</span>
    <div class="progress" v-if="isProgress">
      <span :class="{ launched: launched }" :style="style"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Clock",
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
  data() {
    return {
      secondsLocal: 0,
      launched: false,
      effectLastSeconds: false
    };
  },
  computed: {
    style() {
      return { transition: `width ${this.seconds}s linear` };
    }
  },
  mounted() {
    this.secondsLocal = this.seconds;
    if (this.isProgress) {
      this.$nextTick(() => {
        this.launched = true;
      });
    }
    if (!this.isStop) {
      this.launchCountDown();
    }
  },
  methods: {
    launchCountDown() {
      const timer = setInterval(() => {
        if (this.secondsLocal < 5) {
          this.effectLastSeconds = true;
        }

        if (this.secondsLocal > 1) {
          this.secondsLocal -= 1;
        } else {
          this.$emit("finished");
          clearInterval(timer);
        }
      }, 1000);
    }
  }
};
</script>
