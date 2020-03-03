<template>
  <nav class="side-menu" :style="cssProps">
    <span v-if="withClose" @click="isCollapsedLocal = false">X</span>
    <slot></slot>
  </nav>
</template>
<script>
export default {
  name: "SideMenu",
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "60%"
    },
    duration: {
      type: String,
      default: "100ms"
    },
    easing: {
      type: String,
      default: "ease-in"
    },
    side: {
      type: String,
      default: "right"
    },
    withClose: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssProps() {
      const direction = this.side === "left" ? -1 : 1;
      return {
        transform: `translateX(${
          this.isCollapsedLocal ? "0%" : direction * 101 + "%"
        })`
      };
    },
    pushed() {
      const direction = this.side === "left" ? 1 : -1;
      const offset = this.width.split("%")[0] * direction;
      return `translateX(${offset}%)`;
    },
    pulled() {
      return `translateX(0%)`;
    },
    transition() {
      return `transition: transform ${this.duration} ${this.easing}`;
    }
  },
  data() {
    return {
      isCollapsedLocal: false
    };
  },
  watch: {
    isCollapsed() {
      this.isCollapsedLocal = this.isCollapsed;
    },
    isCollapsedLocal(value) {
      this.loopSiblings(
        node => (node.$el.style.transform = value ? this.pushed : this.pulled)
      );
    },
    $route() {
      this.loopSiblings(node => {
        node.$el.style.transform = this.pulled;
        node.$el.style.transition = `transform ${this.duration} ${this.easing}`;
      });
      const direction = this.side === "left" ? -1 : 1;
      this.$el.style.transition = `transition: transform 0s ${this.easing}`;
      this.$el.style.transform = `translateX(${direction * 101 + "%"})`;
    }
  },
  mounted() {
    const direction = this.side === "left" ? -1 : 1;
    this.isCollapsedLocal = this.isCollapsed;
    this.loopSiblings(node => {
      node.$el.style.transform = this.pulled;
      node.$el.style.transition = `transform ${this.duration} ${this.easing}`;
    });
    this.$el.style.width = this.width;
    this.$el.style[this.side] = 0;
    this.$el.style.transition = `transform ${this.duration} ${this.easing}`;
    this.$el.style.transform = `translateX(${direction * 101 + "%"})`;
  },
  methods: {
    loopSiblings(iterationCallback) {
      this.$parent.$children.forEach(node => {
        if (
          !node.$el.classList.contains("side-menu") &&
          !node.$el.classList.contains("no-pusheable")
        ) {
          iterationCallback(node);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.side-menu {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}
</style>
